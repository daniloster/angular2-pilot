declare var System: any;

System.config({
    packages: {
        '/app/': {
            format: 'register',
            defaultExtension: 'js',
            defaultJSExtensions: true
        }
    }
});

export class ComponentHelper {
    static LoadComponentAsync(path: String) {
        var paths: any = path.split(/\//g);
        paths = paths.pop().split(/\.|-/g);
        let componentName: String = paths.reduce(((prev: String, cur: String) => {
            return prev.concat(cur.charAt(0).toUpperCase() + cur.substring(1));
        }), '');
        return System.import(path).then((c: JSON) => c[componentName]);
    }
    
    static LoadAsync(name: String, path: String){
        return System.import(path).then((c: JSON) => c[name]);
    }
}