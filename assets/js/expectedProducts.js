"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    FetchExpectedProducts(sessionStorage.getItem('storeId')).then(expectedProducts => AllExpectedProductsToHtml(expectedProducts, false));

    document.getElementById("orderform").addEventListener("click", name);
};

function modalHTML() {
    document.getElementById("orderformModal").innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Bestelbon</h5>
        </div>
        <div class="modal-body">

            <table class="table table-hover">
                <thead class="bg-danger modal-body">
                    <tr>
                        <th class="text-white">product id</th>
                        <th class="text-white">naam</th>
                        <th class="text-white">merk</th>
                        <th class="text-white">maat</th>
                        <th class="text-white">kleur</th>
                        <th class="text-white">aantal</th>
                    </tr>
                </thead>
                <tbody id="orderFormProducts">

                </tbody>
            </table>
            <div id="applicationForm">
                <h5 class="modal-title">Aanvraagformulier</h5>
                <table class="table table-hover">
                    <thead class="bg-danger modal-body">
                        <tr>
                            <th class="text-white">product id</th>
                            <th class="text-white">naam</th>
                            <th class="text-white">merk</th>
                            <th class="text-white">maat</th>
                            <th class="text-white">kleur</th>
                            <th class="text-white">aantal</th>
                        </tr>
                    </thead>
                    <tbody id="applicationFormProducts">
                    </tbody>
                </table>
                <div class="row">
                    <label class="col-11 offset-1 col-md-1 font-weight-bold">Reden: </label>
                    <select class="offset-2 offset-md-1">
                        <option class="" value="solden">solden</option>
                        <option value="acties">acties</option>
                        <option value="opendeurweekend">opendeurweekend</option>
                        <option value="avondmarkt">avondmarkt</option>
                        <option value="jaarlijks sluiting">jaarlijks sluiting</option>
                        <option value="verlofperiode">verlofperiode</option>
                        <option value="andere">andere</option>
                    </select>
                </div>

                <textarea class="offset-1 col-10" name="extra" cols="60" rows="5">Extra ...</textarea>
                <button type="button" class="btn btn-danger offset-1"
                    id="noApplicationForm">Annuleren</button>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger offset-0" id="addApplicationForm">Aanvraagformulier</button>
            <button type="button" class="btn btn-outline-danger">Verzenden</button>
            <button type="button" class="btn btn-danger" id="exit">Annuleren</button>
        </div>
    </div>
</div>`;
}

function name() {
    FetchProducts(sessionStorage.getItem('storeId')).then(products => ProductsToHtml(products));

    document.getElementById("orderformModal").style.display = "block";
    modalHTML();
    document.getElementById("applicationForm").style.display = "none";

    document.getElementById("exit").addEventListener("click", function () {
        document.getElementById("orderformModal").style.display = "none";
    });
    document.getElementById("addApplicationForm").addEventListener("click", function () {
        document.getElementById("applicationForm").style.display = "block";
        FetchOrderformStandaard(sessionStorage.getItem('storeId')).then(products => applicationForm(products));
    })
    document.getElementById("noApplicationForm").addEventListener("click", function () {
        document.getElementById("applicationForm").style.display = "none";
    });


    // modal.style.display = "none";
}

function ProductsToHtml(products) {
    let result = "";
    for (let product of products) {
        result += OrderformProductmaker(product);
    }
    document.getElementById("orderFormProducts").innerHTML = result;
}

function applicationForm(products) {
    let result = "";
    for (let product of products) {
        result += OrderformProductmaker(product);
    }
    document.getElementById("applicationFormProducts").innerHTML = result;
}

function OrderformProductmaker({ id, name, brand, size, color, amountMin, amountStock, }) {
    if (amountFunction(amountMin, amountStock) > 0) {
        return `<tr><th scope="row">${id}</th>
        <td>${name}</td>
        <td>${brand}</td>
        <td>${size}</td>
        <td>${color}</td>
        <td>${amountFunction(amountMin, amountStock)}</td>
        </tr>`
    }
    return '';
}




// function modal(){
//     document.getElementById("orderformModal")= ``;
// }

