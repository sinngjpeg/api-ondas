import { AxiosStatic } from "axios";

export class StormGlass {
    readonly stormGlassAPIParams = ''
    readonly stormGlassAPISource = ''


    constructor(protected request: AxiosStatic) { }
    public async fetchPoints(lat: number, lng: number): Promise<{}> {
        return this.request.get('')
        return Promise.resolve({});
    }
}