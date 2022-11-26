<template>
  <div class="wrapper">
    <main class="page">
        <div class="IPR">
            <div class="IPR__container _container">
                <div class="IPR__wrapper">
                    <div class="IPR__items">
                        <div class="IPR__content-left">
                            <div class="IPR__block-curs">
                                <div class="IPR__block__arrowBack"><img src=""></div>
                                <div class="IPR__block__title">программирование на Python с нуля</div>
                                <div class="IPR__block__bk">
                                    <div class="IPR__block__bk__faq-title">Полезно знать</div>
                                </div>
                                <div class="IPR__block__bk">
                                    <div class="IPR__block__bk__about-title">О курсе</div>
                                </div>
                            </div>
                        </div>
                        <div class="IPR__content-rignt">
                            <div class="IPR__content-right__point-1">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-1.svg"></div>
                                <div class="IPR__name">Начало. Что такое Python?</div>
                            </div>
                            <div class="IPR__content-arrow"><img src="../assets/img/IPR/"></div>
                            <div class="IPR__content-right__point-2">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-2.svg"></div>
                                <div class="IPR__name">Установка среды разработки</div>
                            </div>
                            <div class="IPR__content-arrow"><img src="../assets/img/IPR/"></div>
                            <div class="IPR__content-right__point-3">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-2-block.svg"></div>
                                <div class="IPR__name">Базовые и условные операции</div>
                            </div>
                            <div class="IPR__content-arrow"><img src="../assets/img/IPR/"></div>
                            <div class="IPR__content-right__point-4">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-2-block.svg"></div>
                                <div class="IPR__name">Переменные и типы данных</div>
                            </div>
                            <div class="IPR__content-arrow"><img src="../assets/img/IPR/"></div>
                            <div class="IPR__content-right__point-5">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-2-block.svg"></div>
                                <div class="IPR__name">Циклы</div>
                            </div>
                            <div class="IPR__content-arrow"><img src="../assets/img/IPR/"></div>
                            <div class="IPR__content-right__point-6">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-2-block.svg"></div>
                                <div class="IPR__name">Функции</div>
                            </div>
                            <div class="IPR__content-arrow"><img src="../assets/img/IPR/"></div>
                            <div class="IPR__content-right__point-7">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-2-block.svg"></div>
                                <div class="IPR__name">Словари и множества</div>
                            </div>
                            <div class="IPR__content-arrow"><img src="../assets/img/IPR/"></div>
                            <div class="IPR__content-right__point-8">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-2-block.svg"></div>
                                <div class="IPR__name">Работа с файлами</div>
                            </div>
                            <div class="IPR__content-arrow"><img src="../assets/img/IPR/"></div>
                            <div class="IPR__content-right__point-9">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-2-block.svg"></div>
                                <div class="IPR__name">Модули</div>
                            </div>
                            <div class="IPR__content-arrow"><img src="../assets/img/IPR/"></div>
                            <div class="IPR__content-right__point-10">
                                <div class="IPR__icon"><img src="../assets/img/IPR/check-2-block.svg"></div>
                                <div class="IPR__name">Создание ООП</div>
                            </div>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {
    methods:{
        openCurs1() {
            this.isCurs1 = true;
            if (this.openCurs1) {
                window.location.href = '/curs1_py'
                return
            }
        }
    },
    data(){
        return {
            
        }
    }    
}

</script>
