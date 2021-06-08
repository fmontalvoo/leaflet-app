export class PlaceModel {
    private displayName: string;
    private latitude: number;
    private longitude: number;
    private type: string;

    constructor(displayName?: string, latitude?: number, longitude?: number, type?: string) {
        this.displayName = displayName;
        this.latitude = latitude || 0.0;
        this.longitude = longitude || 0.0;
        this.type = type;
    }


    setDisplayName(displayName: string) {
        this.displayName = displayName;
    }

    getDisplayName() {
        return this.displayName;
    }

    setLatitude(latitude: number) {
        this.latitude = latitude || 0.0;
    }
    getLatitude() {
        return this.latitude;
    }

    setLongitude(longitude: number) {
        this.longitude = longitude || 0.0;
    }
    getLongitude() {
        return this.longitude;
    }

    setType(type: string) {
        this.type = type;
    }

    getType() {
        return this.type;
    }

    toJson() {
        return {
            displayName: this.getDisplayName(),
            latitude: this.getLatitude(),
            longitude: this.getLongitude(),
            type: this.getType()
        };
    }
}