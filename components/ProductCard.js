import { FetchDataMixin } from '../mixins/FetchDataMixin.js';
import { FormatCurrencyMixin } from '../mixins/FormatCurrencyMixin.js';


export const ProductCard = {
    mixins: [FormatCurrencyMixin, FetchDataMixin, NavigationMixin],
    props: ['productid','img','alt','title','price'],
    template: `
    <div class="card h-100">
        <div class="h-100">
            <img class="card-img-top" :src="'assets/images/'+img" :alt="alt">
        </div>
        <div class="card-body">
            <p class="card-text">{{title}}</p>
            <h5 class="card-title font-weight-bold">{{formatCurrency(price)}}</h5>
            <div class="text-center">
                <a :href="'/buy?productid='+productid" class="btn btn-primary"
                    @click="updateCart(productid)">Buy</a>
            </div>
        </div>
    </div>
    `,
}