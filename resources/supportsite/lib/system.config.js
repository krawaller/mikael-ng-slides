var systemLocate = System.locate;
System.locate = function(load) {
  return Promise.resolve(systemLocate.call(this, load)).then(function(address) {
    return address + '?bust='+Math.random();
  });
}

System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    paths: {
      '@angular/core': '../../lib/@angular/core/bundles/core.umd.min.js',
      '@angular/common': '../../lib/@angular/common/bundles/common.umd.min.js',
      '@angular/platform-browser': '../../lib/@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser-dynamic': '../../lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      '@angular/compiler': '../../lib/@angular/compiler/bundles/compiler.umd.min.js',
      '@angular/forms': '../../lib/@angular/forms/bundles/forms.umd.min.js',
      '@angular/router': '../../lib/@angular/router/bundles/router.umd.min.js',
      '@angular/animations': '../../lib/@angular/animations/bundles/animations.umd.min.js',
      '@angular/http': '../../lib/@angular/http/bundles/http.umd.min.js',
      '@angular/animations/browser': '../../lib/@angular/animations/bundles/animations-browser.umd.min.js',
      '@angular/platform-browser/animations': '../../lib/@angular/platform-browser/bundles/platform-browser-animations.umd.min.js', 
    },
    meta: {
      '@angular/*': {'format': 'cjs'},
      'interfaces.ts': {
        loader: '../../lib/typescript.js'
      }
    },
    bundles: {
      "../../lib/rxjs-system-bundle/Rx.system.js": [
        "rxjs",
        "rxjs/*",
        "rxjs/operator/*",
        "rxjs/observable/*",
        "rxjs/scheduler/*",
        "rxjs/symbol/*",
        "rxjs/add/operator/*",
        "rxjs/add/observable/*",
        "rxjs/util/*"
      ]
    },
    packages: {
       'rxjs'                                : {defaultExtension: false}
    }

});
