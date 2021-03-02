'use strict';

angular
  .module('mysystemstatusbadgeextension', ['openshiftConsole'])
  .run([
    'extensionRegistry',
    function(extensionRegistry) {

      //http://paas.stage.psi.redhat.com
      var system_status_elem = $('<a href="https://paas.stage.psi.redhat.com/"' +
      'target="_blank" class="nav-item-iconic system-status"><span title="' +
      'System Status" class="fa status-icon pficon-warning-triangle-o">' +
      '</span>System Status</a>');

      // Add the extension point to the registry so the badge appears
      // To disable the badge, comment this block out
      extensionRegistry
        .add('nav-system-status', function() {
          return [{
            type: 'dom',
            node: system_status_elem
          }];
        });
    }
  ]);

hawtioPluginLoader.addModule('mysystemstatusbadgeextension');
