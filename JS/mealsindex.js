// var all_commodity_area = document.querySelector('#all-commodity-area');
// all_commodity_area.innerHTML =`
//         @foreach ($commodity as $CommodityEach)
//             <div class="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
//                 <a href="/Commodity-Inner/{{$CommodityEach->id}}" style="text-decoration: none;color: black;">
//                     <div class="card p-2">
//                         <div class="console-name">商品</div>
//                         <div>
//                             <img src="{{ $CommodityEach->img_path ?? '' }}" alt="..." width="100%">
//                         </div>
//                         <div class="card-body p-2">
//                             <p class="card-title m-0">{{ $CommodityEach->commodity_name }}</p>
//                             <p class="card-text">{{ $CommodityEach->commodity_price }}</p>
//                         </div>
//                     </div>
//                 </a>
//             </div>
//         @endforeach
//         `


// Meals_project.innerHTML =`
// @foreach ($Meals as $MealsEach)
//     <div class="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
//         <a href="/Meals-Inner/{{$MealsEach->id}}" style="text-decoration: none;color: black;">
//             <div class="card p-2">
//                 <div class="console-name">商品</div>
//                 <div>
//                     <img src="{{ $MealsEach->img_path ?? '' }}" alt="..." width="100%">
//                 </div>
//                 <div class="card-body p-2">
//                     <p class="card-title m-0">{{ $MealsEach->Meals_name }}</p>
//                     <p class="card-text">{{ $MealsEach->Meals_price }}</p>
//                 </div>
//             </div>
//         </a>
//     </div>
// @endforeach
// `;


//區域歸類

//全部餐點
function all_Meals(){
    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = "";
    Meals_project.innerHTML =`
            <div class="Remark">
                <div>
                    <div style="color:#f95223; font-size: 20px;font-weight: 600;">※供餐時間表：</div>
                    <div style="color:black; font-size: 20px;font-weight: 600;padding-top:0.5rem;">1.早餐－08：00～10：30</div>
                    <div style="color:black; font-size: 20px;font-weight: 600;padding-top:0.5rem;">2.沙拉－08：00～19：30</div>
                    <div style="color:black; font-size: 20px;font-weight: 600;padding-top:0.5rem;">3.點心－08：00～19：30</div>
                    <div style="color:black; font-size: 20px;font-weight: 600;padding-top:0.5rem;">4.精選下午茶－14：00～16：30</div>
                    <div style="color:black; font-size: 20px;font-weight: 600;padding-top:0.5rem;">5.興大學生特惠餐－11：00～19：30</div>
                    <div style="color:#f95223; font-size: 12px;font-weight: 600;padding-top:0.5rem; text-align: center;">※學生特惠餐限興大學生憑學生證選用<br>一證一套。</div>
                    <div style="color:black; font-size: 20px;font-weight: 600;padding-top:0.5rem;">6.日式咖哩－11：00～19：30</div>
                    <div style="color:#f95223; font-size: 12px;font-weight: 600;padding-top:0.5rem; text-align: center;">※升級套餐可享有濃湯與手工麵包一份</div>
                    <div style="color:black; font-size: 20px;font-weight: 600;padding-top:0.5rem;">7.異國米飯－11：00～19：30</div>
                    <div style="color:#f95223; font-size: 12px;font-weight: 600;padding-top:0.5rem;text-align: center;">※升級套餐可享有濃湯與手工麵包一份</div>
                    <div style="color:black; font-size: 20px;font-weight: 600;padding-top:0.5rem;">8.義大利麵－11：00～19：30</div>
                    <div style="color:#f95223; font-size: 12px;font-weight: 600;padding-top:0.5rem;text-align: center;">※升級套餐可享有濃湯與手工麵包一份</div>
                </div>
            </div>


            <div class="project">
                <div class="project-card">
                    <div class="project-name">全部餐點</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">200元</p>
                    </div>
                </div>
            </div>
        `;
    
}


//早餐
function breakfast(){
    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = "";
    Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間08：00～10：30</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">早餐</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">50元</p>
                    </div>
                </div>
            </div>
        `;
}


//沙拉
function salad(){

    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = "";
    Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間08：00～19：30</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">沙拉</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">50元</p>
                    </div>
                </div>
            </div>
        `;
    
}


//點心
function dessert(){

    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = "";
    Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間08：00～19：30</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">點心</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">70元</p>
                    </div>
                </div>
            </div>
        `;
}

//精選下午茶
function afternoon_tea(){

    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = "";
    Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間14：00～16：30</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">精選下午茶</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">150元</p>
                    </div>
                </div>
            </div>
        `;
}

//中興大學學生特餐
function nchu_student(){

    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = "";
    Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間11：00～19：30</div>
                <div style="color:#f95223; font-size: 30px;font-weight: 600;padding-top:30px;">※限興大學生憑學生證選用<br>一證一套。</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">中興大學學生特餐</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">130元</p>
                    </div>
                </div>
            </div>
        `;
}

//日式咖哩
function curry_jp(){

    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = "";
    Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間11：00～19：30</div>
                <div style="color:#f95223; font-size: 30px;font-weight: 600;padding-top:30px ;">※升級套餐可享有濃湯與手工麵包一份</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">日式咖哩</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">180元</p>
                    </div>
                </div>
            </div>
        `;
}

//異國米飯
function exotic_rice(){

    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = "";
    Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間11：00～19：30</div>
                <div style="color:#f95223; font-size: 30px;font-weight: 600;padding-top:30px ;">※升級套餐可享有濃湯與手工麵包一份</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">異國米飯</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">90元</p>
                    </div>
                </div>
            </div>
        `;
}

//義大利麵
function pasta(){

    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = "";
    Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間11：00～19：30</div>
                <div style="color:#f95223; font-size: 30px;font-weight: 600;padding-top:30px ;">※升級套餐可享有濃湯與手工麵包一份</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">義大利麵</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">100元</p>
                    </div>
                </div>
            </div>
        `;
}



// RWD出現的餐點選擇列表
function meal() {
    var Meals = document.querySelector('#meals').value;
    var Meals_project = document.querySelector('.box-inner');
    Meals_project.innerHTML = ''

    if (Meals == "1") {
        // 全部餐點
        Meals_project.innerHTML =`
            <div class="Remark">
                <div>
                    <div style="color:#f95223; font-size: 18px;font-weight: 600;">※供餐時間表：</div>
                    <div style="color:black; font-size: 18px;font-weight: 600;padding-top:0.5rem;">1.早餐－08：00～10：30</div>
                    <div style="color:black; font-size: 18px;font-weight: 600;padding-top:0.5rem;">2.沙拉－08：00～19：30</div>
                    <div style="color:black; font-size: 18px;font-weight: 600;padding-top:0.5rem;">3.點心－08：00～19：30</div>
                    <div style="color:black; font-size: 18px;font-weight: 600;padding-top:0.5rem;">4.精選下午茶－14：00～16：30</div>
                    <div style="color:black; font-size: 18px;font-weight: 600;padding-top:0.5rem;">5.興大學生特惠餐－11：00～19：30</div>
                    <div style="color:#f95223; font-size: 12px;font-weight: 600;padding-top:0.5rem; text-align: center;">※學生特惠餐限興大學生憑學生證選用<br>一證一套。</div>
                    <div style="color:black; font-size: 18px;font-weight: 600;padding-top:0.5rem;">6.日式咖哩－11：00～19：30</div>
                    <div style="color:#f95223; font-size: 12px;font-weight: 600;padding-top:0.5rem; text-align: center;">※升級套餐可享有濃湯與手工麵包一份</div>
                    <div style="color:black; font-size: 18px;font-weight: 600;padding-top:0.5rem;">7.異國米飯－11：00～19：30</div>
                    <div style="color:#f95223; font-size: 12px;font-weight: 600;padding-top:0.5rem;text-align: center;">※升級套餐可享有濃湯與手工麵包一份</div>
                    <div style="color:black; font-size: 18px;font-weight: 600;padding-top:0.5rem;">8.義大利麵－11：00～19：30</div>
                    <div style="color:#f95223; font-size: 12px;font-weight: 600;padding-top:0.5rem;text-align: center;">※升級套餐可享有濃湯與手工麵包一份</div>
                </div>
            </div>


            <div class="project">
                <div class="project-card">
                    <div class="project-name">全部餐點</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">200元</p>
                    </div>
                </div>
            </div>
        `;

    } else if(Meals == "2"){
        // 早餐
        Meals_project.innerHTML =`
        <div class="Remark">
            <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間08：00～10：30</div>
        </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">早餐</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">50元</p>
                    </div>
                </div>
            </div>
        `;
    } else if(Meals == "3"){
        // 沙拉
        Meals_project.innerHTML =`
        <div class="Remark">
            <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間08：00～19：30</div>
        </div>

        <div class="project">
            <div class="project-card">
                <div class="project-name">沙拉</div>
                <div>
                <img
                    src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                    alt="..." width="100%">
                </div>
                <div class="project-body">
                <p class="project-title">DOGG</p>
                <p class="project-text">備註</p>
                <p class="project-price">50元</p>
                </div>
            </div>
        </div>
    `;

    } else if(Meals == "4"){
        // 點心
        Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間08：00～19：30</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">點心</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">70元</p>
                    </div>
                </div>
            </div>
        `;

    } else if(Meals == "5"){
        // 精選下午茶
        Meals_project.innerHTML =`
        <div class="Remark">
            <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間14：00～16：30</div>
        </div>

        <div class="project">
            <div class="project-card">
                <div class="project-name">精選下午茶</div>
                <div>
                <img
                    src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                    alt="..." width="100%">
                </div>
                <div class="project-body">
                <p class="project-title">DOGG</p>
                <p class="project-text">備註</p>
                <p class="project-price">150元</p>
                </div>
            </div>
        </div>
    `;
    } else if(Meals == "6"){
        // 中興大學學生特餐
        Meals_project.innerHTML =`
        <div class="Remark">
            <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間11：00～19：30</div>
            <div style="color:#f95223; font-size: 30px;font-weight: 600;padding-top:30px ;">※限興大學生憑學生證選用<br>一證一套。</div>
        </div>

        <div class="project">
            <div class="project-card">
                <div class="project-name">中興大學學生特餐</div>
                <div>
                <img
                    src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                    alt="..." width="100%">
                </div>
                <div class="project-body">
                <p class="project-title">DOGG</p>
                <p class="project-text">備註</p>
                <p class="project-price">130元</p>
                </div>
            </div>
        </div>
    `;
    } else if(Meals == "7"){
        // 日式咖哩
        Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間11：00～19：30</div>
                <div style="color:#f95223; font-size: 30px;font-weight: 600;padding-top:30px ;">※升級套餐可享有濃湯與手工麵包一份</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">日式咖哩</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">180元</p>
                    </div>
                </div>
            </div>
        `;
    } else if(Meals == "8"){
        // 異國米飯
        Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間11：00～19：30</div>
                <div style="color:#f95223; font-size: 30px;font-weight: 600;padding-top:30px ;">※升級套餐可享有濃湯與手工麵包一份</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">異國米飯</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">90元</p>
                    </div>
                </div>
            </div>
        `;
    } else if(Meals == "9"){
        // 義大利麵
        Meals_project.innerHTML =`
            <div class="Remark">
                <div style="color:#f95223; font-size: 30px;font-weight: 600;">※供餐時間11：00～19：30</div>
                <div style="color:#f95223; font-size: 30px;font-weight: 600;padding-top:30px ;">※升級套餐可享有濃湯與手工麵包一份</div>
            </div>

            <div class="project">
                <div class="project-card">
                    <div class="project-name">義大利麵</div>
                    <div>
                    <img
                        src="https://www.seriouseats.com/thmb/uGGwEqPZf7PzhES1ZCAqHLgCbG8=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
                        alt="..." width="100%">
                    </div>
                    <div class="project-body">
                    <p class="project-title">DOGG</p>
                    <p class="project-text">備註</p>
                    <p class="project-price">100元</p>
                    </div>
                </div>
            </div>
        `;
    }
  }
