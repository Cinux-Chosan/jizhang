'use strict';

define('jizhang/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/is-eq.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/is-eq.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/inject-controller2components.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/inject-controller2components.js should pass ESLint\n\n');
  });

  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/apps-nav/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/apps-nav/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/jizhang/detail/page-detail/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/jizhang/detail/page-detail/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/jizhang/detail/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/jizhang/detail/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/jizhang/edit/page-edit/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/jizhang/edit/page-edit/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/jizhang/edit/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/jizhang/edit/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/jizhang/left-panel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/jizhang/left-panel/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/jizhang/right-panel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/jizhang/right-panel/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/jizhang/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/jizhang/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/login/page-login/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/apps/login/page-login/component.js should pass ESLint\n\n3:19 - \'tip\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('pods/apps/login/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/login/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/apps/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/apps/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/plain-comp/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/plain-comp/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass ESLint\n\n');
  });

  QUnit.test('utils/util.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/util.js should pass ESLint\n\n4:3 - \'toastr\' is not defined. (no-undef)\n5:3 - \'toastr\' is not defined. (no-undef)');
  });
});
define('jizhang/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('jizhang/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'jizhang/tests/helpers/start-app', 'jizhang/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = _ember.default.RSVP.Promise;
});
define('jizhang/tests/helpers/resolver', ['exports', 'jizhang/resolver', 'jizhang/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('jizhang/tests/helpers/start-app', ['exports', 'ember', 'jizhang/app', 'jizhang/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('jizhang/tests/integration/helpers/is-eq-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('is-eq', 'helper:is-eq', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "AhoUursa",
      "block": "{\"statements\":[[1,[33,[\"is-eq\"],[[28,[\"inputValue\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('jizhang/tests/integration/pods/components/apps-nav/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('apps-nav', 'Integration | Component | apps nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "1uZpWV+M",
      "block": "{\"statements\":[[1,[26,[\"apps-nav\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "rVkhT9HT",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"apps-nav\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jizhang/tests/integration/pods/components/plain-comp/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('plain-comp', 'Integration | Component | plain comp', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "oo3jJRIW",
      "block": "{\"statements\":[[1,[26,[\"plain-comp\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ECL3qwMP",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"plain-comp\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jizhang/tests/test-helper', ['jizhang/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('jizhang/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/is-eq-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/is-eq-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/apps-nav/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/apps-nav/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/plain-comp/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/plain-comp/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/controller-inject-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/controller-inject-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/application/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/application/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/apps/edit/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/apps/edit/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/apps/jizhang/detail/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/apps/jizhang/detail/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/apps/jizhang/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/apps/jizhang/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/apps/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/apps/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/login/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/login/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/util-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/util-test.js should pass ESLint\n\n');
  });
});
define('jizhang/tests/unit/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jizhang/tests/unit/initializers/controller-inject-test', ['ember', 'jizhang/initializers/controller-inject', 'qunit', 'jizhang/tests/helpers/destroy-app'], function (_ember, _controllerInject, _qunit, _destroyApp) {
  'use strict';

  (0, _qunit.module)('Unit | Initializer | controller inject', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember.default.run(function () {
        _this.application = _ember.default.Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _destroyApp.default)(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _controllerInject.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('jizhang/tests/unit/pods/application/controller-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('jizhang/tests/unit/pods/application/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jizhang/tests/unit/pods/apps/edit/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:apps/edit', 'Unit | Route | apps/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jizhang/tests/unit/pods/apps/jizhang/detail/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:apps/jizhang/detail', 'Unit | Route | apps/jizhang/detail', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jizhang/tests/unit/pods/apps/jizhang/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:apps/jizhang', 'Unit | Route | apps/jizhang', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jizhang/tests/unit/pods/apps/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:apps', 'Unit | Route | apps', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jizhang/tests/unit/pods/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jizhang/tests/unit/pods/login/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jizhang/tests/unit/utils/util-test', ['jizhang/utils/util', 'qunit'], function (_util, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Utility | util');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _util.default)();
    assert.ok(result);
  });
});
require('jizhang/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
