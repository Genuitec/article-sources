export class Coin {
    id: string;
    name: string;
    symbol: string;
    rank: string;
    priceUsd: string;

    constructor(attrs: any = null) {
        if (attrs) {
            this.build(attrs);
        }
    }

    build(attrs: any) {
        this.id = attrs.id;
        this.name = attrs.name;
        this.symbol = attrs.symbol;
        this.rank = attrs.rank;
        this.priceUsd = attrs.price_usd;
    }
}
