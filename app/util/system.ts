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

export class ComponentHelper{
    static LoadComponentAsync(name,path){
        return System.import(path).then(c => c[name]);
    }
}