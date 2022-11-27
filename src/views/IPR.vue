<template>
  <div class="wrapper">
    <main class="page">
        <div class="ipr">
            <div class="ipr__container">
                <div class="ipr__wrapper">
                    <div class="ipr__items">
                        <div class="ipr__content-left">
                            <div class="ipr__block">
                                <router-link to="/profile" class="ipr__block-arrow"><img src="../assets/img/ipr/arrow-card.svg" alt=""></router-link>
                                <div class="ipr__block-title">Программирование на Python с нуля</div>
                                <div class="ipr__block-btn__box">
                                    <div class="ipr__block-button btn-card">
																			<div class="btn-card-txt">Полезно знать</div>
																		</div>
																		<div class="ipr__block-button btn-card">
																			<div class="btn-card-txt">О курсе</div>
																		</div>
                                </div>

                            </div>
                        </div>
                        <div class="ipr__content-right">
                            <div class="ipr__content-point ipr__content-point-1">
                                <div class="ipr__icon"><img src="../assets/img/ipr/circle.svg"></div>
                                <div class="ipr__name">Начало. Что такое Python?</div>
                            </div>
                            <div class="ipr__content-arrow ipr__content-arrow-1"><img src="../assets/img/ipr/arrow.svg"></div>
                            <div class="ipr__content-point ipr__content-point-2">
                                <div class="ipr__icon"><img src="../assets/img/ipr/map.svg"></div>
                                <div class="ipr__name">Установка среды разработки</div>
                            </div>
                            <div class="ipr__content-arrow ipr__content-arrow-2"><img src="../assets/img/ipr/arrow.svg"></div>
                            <div class="ipr__content-point ipr__content-point-3">
                                <div class="ipr__icon"><img src="../assets/img/ipr/map-lock.svg"></div>
                                <div class="ipr__name">Переменные и типы данных</div>
                            </div>
                            <div class="ipr__content-arrow ipr__content-arrow-3"><img src="../assets/img/ipr/arrow.svg"></div>
                            <div class="ipr__content-point ipr__content-point-4">
                                <div class="ipr__icon"><img src="../assets/img/ipr/map-lock.svg"></div>
                                <div class="ipr__name">Базовые и условные операции</div>
                            </div>
                            <div class="ipr__content-arrow ipr__content-arrow-4"><img src="../assets/img/ipr/arrow.svg"></div>
                            <div class="ipr__content-point ipr__content-point-5">
                                <div class="ipr__icon"><img src="../assets/img/ipr/map-lock.svg"></div>
                                <div class="ipr__name">Циклы</div>
                            </div>
                            <div class="ipr__content-arrow ipr__content-arrow-5"><img src="../assets/img/ipr/arrow.svg"></div>
                            <div class="ipr__content-point ipr__content-point-6">
                                <div class="ipr__icon"><img src="../assets/img/ipr/map-lock.svg"></div>
                                <div class="ipr__name">Функции</div>
                            </div>
                            <div class="ipr__content-arrow ipr__content-arrow-6"><img src="../assets/img/ipr/arrow.svg"></div>
                            <div class="ipr__content-point ipr__content-point-7">
                                <div class="ipr__icon"><img src="../assets/img/ipr/map-lock.svg"></div>
                                <div class="ipr__name">Словари и множества</div>
                            </div>
                            <div class="ipr__content-arrow ipr__content-arrow-7"><img src="../assets/img/ipr/arrow.svg"></div>
                            <div class="ipr__content-point ipr__content-point-8">
                                <div class="ipr__icon"><img src="../assets/img/ipr/map-lock.svg"></div>
                                <div class="ipr__name">Работа с файлами</div>
                            </div>
                            <div class="ipr__content-arrow ipr__content-arrow-8"><img src="../assets/img/ipr/arrow.svg"></div>
                            <div class="ipr__content-point ipr__content-point-9">
                                <div class="ipr__icon"><img src="../assets/img/ipr/map-lock.svg"></div>
                                <div class="ipr__name">Модули</div>
                            </div>
                            <div class="ipr__content-arrow ipr__content-arrow-9"><img src="../assets/img/ipr/arrow.svg"></div>
                            <div class="ipr__content-point ipr__content-point-10">
                                <div class="ipr__icon"><img src="../assets/img/ipr/map-lock.svg"></div>
                                <div class="ipr__name">Создание ООП</div>
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
	name: 'ipr',
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
