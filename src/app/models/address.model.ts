export class AddressModel {
    private city: string;
    private country: string;
    private latitude: number;
    private longitude: number;
    private neighbourhood: string;
    private postcode: string;
    private road: string;
    private suburb: string;
    private state: string;

    constructor(city?: string, country?: string, latitude?: number,
        longitude?: number, neighbourhood?: string, postcode?: string,
        road?: string, suburb?: string, state?: string) {
        this.city = city;
        this.country = country;
        this.latitude = latitude;
        this.longitude = longitude;
        this.neighbourhood = neighbourhood;
        this.postcode = postcode;
        this.road = road;
        this.suburb = suburb;
        this.state = state;
    }

    setCity(city: string) {
        this.city = city;
    }
    getCity() {
        return this.city;
    }

    setCountry(country: string) {
        this.country = country;
    }
    getCountry() {
        return this.country;
    }

    setLatitude(latitude: number) {
        this.latitude = latitude;
    }
    getLatitude() {
        return this.latitude;
    }

    setLongitude(longitude: number) {
        this.longitude = longitude;
    }
    getLongitude() {
        return this.longitude;
    }

    setNeighbourhood(neighbourhood: string) {
        this.neighbourhood = neighbourhood;
    }
    getNeighbourhood() {
        return this.neighbourhood;
    }

    setPostcode(postcode: string) {
        this.postcode = postcode;
    }
    getPostcode() {
        return this.postcode;
    }

    setRoad(road: string) {
        this.road = road;
    }
    getRoad() {
        return this.road;
    }

    setSuburb(suburb: string) {
        this.suburb = suburb;
    }
    getSuburb() {
        return this.suburb;
    }

    setState(state: string) {
        this.state = state;
    }
    getState() {
        return this.state;
    }

    toJson() {
        return {
            city: this.getCity(),
            country: this.getCountry(),
            latitude: this.getLatitude(),
            longitude: this.getLongitude(),
            neighbourhood: this.getNeighbourhood(),
            postcode: this.getPostcode(),
            road: this.getRoad(),
            suburb: this.getSuburb(),
            state: this.getState(),
        };
    }

}