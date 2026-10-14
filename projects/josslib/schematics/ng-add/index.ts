import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

interface IThemeBundle {
  input: string;
  bundleName: string;
  inject: boolean;
}

export function ngAdd(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('---- JossLib ----');
    context.logger.info('By: Josselyn Maldonado Muñoz');
    //Temas
    const lightTheme: string = 'node_modules/josslib/assets/themes/josselyn.scss';
    const darkTheme: string = 'node_modules/josslib/assets/themes/josselyn-dark.scss';

    context.addTask(new NodePackageInstallTask());
    if (tree.exists('angular.json')) {
      //Leer index.html
      const indexContent = tree.read('src/index.html');
      //Leer Angular.json
      var AngularJSON = tree.read('angular.json')!.toString('utf-8');
      var json = JSON.parse(AngularJSON);
      var projects = json['projects'];
      //Recorrer todos los proyectos, para insertar los estilos correspondientes en todos los que sean sitios web
      Object.keys(projects).forEach((projectName) => {
        var stylesJSON = json['projects'][projectName]['architect']['build']['options']['styles'];
        if (stylesJSON != undefined) {
          if (_options.theme != 'ninguno') {
            context.logger.info(
              '⌛ Cargando tema ' + _options.theme + ' en el proyecto ' + projectName + '...',
            );
            switch (_options.theme) {
              case 'dynamic':
                //Agregar bundles al angular.json
                const lightBundleTheme: IThemeBundle = {
                  input: lightTheme,
                  bundleName: 'josselyn',
                  inject: false,
                };
                const darkBundleTheme: IThemeBundle = {
                  input: darkTheme,
                  bundleName: 'josselyn-dark',
                  inject: false,
                };
                addIfNotAdded(stylesJSON, lightBundleTheme);
                addIfNotAdded(stylesJSON, darkBundleTheme);

                //Agregar refencia al index.html
                if (indexContent) {
                  let newContent = indexContent
                    .toString('utf-8')
                    .replace(
                      '</head>',
                      '<link id="app-theme" type="text/css" rel="stylesheet" href="/josselyn.css" /></head>',
                    );
                  tree.overwrite('src/index.html', newContent);
                } else {
                  context.logger.warn(
                    'No se pudo modificar el index.html. Asegúrate de añadir la referencia manualmente para llamar a los estilos',
                  );
                }
                break;
              case 'josselyn':
                addIfNotAdded(stylesJSON, lightTheme);
                break;
              case 'josselyn-dark':
                addIfNotAdded(stylesJSON, darkTheme);
                break;
              default:
                context.logger.info(_options.theme + ' - No se ha encontrado el tema.');
                context.logger.info('Ajuste manualmente su angular.json');
                break;
            }
            //Estilos de adicionales. Verificar antes que NO estén ya agregados.
            addIfNotAdded(stylesJSON, 'node_modules/josslib/assets/themes/general.scss');
            addIfNotAdded(stylesJSON, 'node_modules/primeicons/primeicons.css');
            json['projects'][projectName]['architect']['build']['options'] = tree.overwrite(
              'angular.json',
              JSON.stringify(json, null, 2),
            );
          } else {
            context.logger.info(
              'No se instalará ningún estilo. Añada los estilos manualmente a angular.json para el correcto funcionamiento de la librería.',
            );
          }
        } else {
          context.logger.info(
            'El proyecto ' + projectName + ' no es una app web. No se instalarán los estilos.',
          );
        }
      });
    } else {
      context.logger.error(
        'Archivo angular.json no encontrado. Asegúrese de ejecutar la instalación en un proyecto de angular completo.',
      );
    }
    return tree;
  };
}

function addIfNotAdded(array: any, item: string | IThemeBundle) {
  if (array.findIndex((x: any) => x == item) == -1) {
    array.unshift(item);
  }
}
