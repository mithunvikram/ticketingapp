import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Constants {

    public pageTitles: string = 'http://localhost:8002/dmngenerate';

    public savescreen: string = 'http://localhost:8002/savescreen';

    public getallscreen: string = 'http://localhost:8002/getallscreens';

}
