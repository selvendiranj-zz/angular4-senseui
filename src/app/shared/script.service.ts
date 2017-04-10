import { Injectable } from '@angular/core';
import { ScriptStore, CompScriptsStore } from './script.store';

declare var document: any;

@Injectable()
export class ScriptService
{

    private scripts: any = {};
    private compScripts: any = {};

    public constructor()
    {
        ScriptStore.forEach((script: any) =>
        {
            this.scripts[script.name] = { loaded: false, src: script.src };
        });

        CompScriptsStore.forEach((compScript: any) =>
        {
            this.compScripts[compScript.name] = { scripts: compScript.scripts };
        });
    }

    public loadCompScript(comName: string): any
    {
        let listScript: string[] = this.compScripts[comName].scripts;
        this.load(...listScript).then((data: any) =>
        {
            console.log('script loaded ', data);
        }).catch((error: any) => console.log(error));
    }

    public load(...scripts: string[]): any
    {
        let promises: any[] = [];
        scripts.forEach((script: any) =>
        {
            promises.push(this.loadScript(script));
        });
        return Promise.all(promises);
    }

    public loadScript(name: string): any
    {
        return new Promise((resolve: any, reject: any) =>
        {
            // resolve if already loaded
            if (this.scripts[name].loaded)
            {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else
            {
                // load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState)
                {
                    // IE
                    script.onreadystatechange = () =>
                    {
                        if (script.readyState === 'loaded' || script.readyState === 'complete')
                        {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else
                {
                    // Others
                    script.onload = () =>
                    {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('body')[0].appendChild(script);
            }
        });
    }
}
