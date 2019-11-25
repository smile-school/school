(function () {
    function Counter(option) {
        var self = this;

        /**
         * Object with properties.
         * @type {{timers: {hours: {maxValue: number, teg: string, value: number, labels: string[]}, minutes: {maxValue: number, teg: string, value: number, labels: string[]}, day: {maxValue: number, teg: string, value: number, labels: string[]}, second: {maxValue: number, teg: string, value: number, labels: string[]}}, timerStatus: boolean, svg: {xmlns: string, viewBox: string, "xml:space": string}, endPause: number, endData: number, box: (*|Element|HTMLElement), diff: number, initStatus: boolean, startPause: number, isLoaded: boolean, animate: {animateStaus: (*|boolean), max: {}}, path: {d: string, class: string}, timer: number, events: {start: (*|events.start), end: (*|events.end)}}}
         */
        this.options = {
            endData: 0, //Кінцева точка відліку (Парсимо в масив).
            box: option.box, //Враппер в який вставляється результат відліку.
            timers: {
                day: {
                    value: 0,
                    maxValue: 30,
                    labels: ["День", "Дня", "Дней"],
                    teg: "",
                },
                hours: {
                    value: 0,
                    maxValue: 23,
                    labels: ["Час", "Часа", "Часов"],
                    teg: "",
                },
                minutes: {
                    value: 0,
                    maxValue: 59,
                    labels: ["Минута", "Минуты", "Минут"],
                    teg: "",
                },
                second: {
                    value: 0,
                    maxValue: 59,
                    labels: ["Секунда", "Секунды", "Секунд"],
                    teg: "",
                },
            },
            startPause: 0,
            endPause: 0,
            timerStatus: true,
            timer: 0,
            diff: 0,
            isLoaded: (option.isLoaded || option.isLoaded === undefined) ? true : false, //Перевіряємо чи загружається коунтер через конструктор чи через обєкт.
            initStatus: false,
            events: {
                start: option.events.start,
                end: option.events.end,
            },
            animate: {
                animateStatus: option.animateStatus || false,
                animateClass: option.animateClass || 'animation',
                max: {},
                svgTeg: option.animationImage || '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 283.5 283.5" xml:space="preserve"><path class="st0" d="M141.7,6.5C216.4,6.5,277,67,277,141.7S216.4,277,141.7,277S6.5,216.4,6.5,141.7S67,6.5,141.7,6.5"/></svg>',
                svgLength: 0,
            }
        };

        /**
         * Initialisation function, has a status flag.
         */
        this.init = function () {
            if (!self.options.initStatus) {
                self.options.initStatus = true;
                self.beforeStart();
            }
            //console.log(this);
        };

        /**
         * This function set the date format from string.
         */
        this.setEndDate = function () {
            var endDate = option.endData.split('-');
            this.options.endData = new Date(+endDate[0], +endDate[1] - 1, +endDate[2], +endDate[3], +endDate[4], +endDate[5])
            // console.log(new Date(+endDate[0]));
        };

        /**
         * This function verify difference with end data and naw date.
         * When difference is more 0 function start other functions.
         */
        this.setTimeCounter = function () {
            this.setDiff();
            if (this.options.diff > 0) {
                this.setDayHours();
                this.setMimutesCounter();
                this.setSecondCounter();
            }
            // console.log(this.options.timers);
            this.build();
        };

        /**
         * This function build and append elements in wrapper.
         */
        this.build = function () {
            if (self.options.animate.animateStatus){
                self.options.box.classList.add(self.options.animate.animateClass)
            }
            var ulTeg = document.createElement('ul');

            for (var key in this.options.timers) {
                var liTeg = document.createElement('li');
                liTeg.classList.add(key);
                liTeg.dataset.counter = key;

                var spanTeg = document.createElement('span');
                spanTeg.textContent = this.addZero(key);
                liTeg.appendChild(spanTeg);

                if(self.options.animate.animateStatus){
                    var svgTeg = self.options.animate.svgTeg;
                    liTeg.innerHTML += svgTeg;
                    if (self.options.animate.svgLength === 0){
                        self.options.animate.svgLength = Math.floor(liTeg.lastChild.firstChild.getTotalLength());
                        //console.log(self.options.animate.svgLength);
                    }
                }

                var spanTegDay = document.createElement('span');
                spanTegDay.textContent = this.declOfNum(this.options.timers[key].value, this.options.timers[key].labels);
                liTeg.appendChild(spanTegDay);

                console.log(liTeg);
                this.options.timers[key].teg = liTeg;
                if(self.options.animate.animateStatus){
                    self.circleMove(key);
                }
                ulTeg.appendChild(liTeg);
            }
            this.options.box.appendChild(ulTeg);
            console.log(ulTeg);
            this.counterGo();
        };

        /**
         * This function add zero before value when it is less as 10.
         * @param key
         * @returns {string}
         */
        this.addZero = function (key) {
            return (this.options.timers[key].value < 10) ? "0" + this.options.timers[key].value : this.options.timers[key].value;
        };

        /**
         * This function set zero and day value in span teg.
         * @param key
         */
        this.setCounterElement = function (key) {
            self.options.timers[key].teg.firstElementChild.textContent = self.addZero(key);
            self.options.timers[key].teg.lastElementChild.textContent = self.declOfNum(self.options.timers[key].value, self.options.timers[key].labels);
        };

        /**
         *
         * @param n
         * @param titles
         * @returns {*}
         */
        this.declOfNum = function (n, titles) {
            return titles[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
        };

        /**
         *
         */
        this.counterGo = function () {
            this.options.timer = setInterval(this.reCalculate, 1000);
        };

        /**
         *  This function count difference with end date and now data.
         */
        this.setDiff = function () {
            //console.log(self.options.endData);
            this.options.diff = Math.floor((this.options.endData.getTime() - new Date().getTime()) / 1000);
        };

        /**
         *
         */
        this.setSecondCounter = function () {
            this.options.timers.second.value = Math.floor(this.options.diff % 60);
        };

        /**
         *
         */
        this.setMimutesCounter = function () {
            this.options.timers.minutes.value = Math.floor((this.options.diff / 60) % 60);
        };

        /**
         *
         */
        this.setDayHours = function () {
            this.options.timers.day.value = this.options.diff / 86400 ^ 0;
            this.options.timers.hours.value = Math.floor((this.options.diff / 60 / 60) % 24);
        };

        /**
         *
         */
        this.reCalculate = function () {
            self.setDiff();
            if (self.options.diff >= 0) {
                self.setSecondCounter();
                self.setCounterElement('second');
                self.circleMove('second');
                if (self.options.timers.second.value === 59) {
                    self.setMimutesCounter();
                    self.setCounterElement('minutes');
                    self.circleMove('minutes');

                }
                if (self.options.timers.minutes.value === 59 && self.options.timers.second.value === 59) {
                    self.setDayHours();
                    self.setCounterElement('hours');
                    self.circleMove('hours');
                    self.setCounterElement('day');
                    self.circleMove('day');

                }
            } else {
                self.destroy();
            }

            // console.log('13rfvfjerjv')
        };

        /**
         *
         */
        this.correctEndTime = function () {
            console.log(self.options.endData);
            this.options.endData = new Date(this.options.endData.getTime() + (self.options.endPause.getTime() - self.options.startPause.getTime()));
            console.log(self.options.endData);

        };

        /**
         *
         */
        this.pause = function () {
            if (self.options.timerStatus) {
                self.options.timerStatus = false;
                clearInterval(self.options.timer);
                // console.log(self.options.timer);
                self.options.startPause = new Date();
                // console.log( self.options.startPause);
            } else {
                self.options.endPause = new Date();
                self.options.timerStatus = true;
                self.correctEndTime();
                self.counterGo();
                //  console.log(self.options.endPause);
            }
        };

        /**
         *
         */
        this.beforeStart = function () {
            if (this.options.events.start) {
                this.options.events.start();
            }
            self.setEndDate();
            self.setTimeCounter();
        };

        /**
         *
         */
        this.destroy = function () {
            clearInterval(self.options.timer);
            self.options.box.innerHTML = '';
            self.afterEnd();
        };
        this.afterEnd = function () {
            if (self.options.events.end) {
                self.options.events.end();
            }
        };

        /**
         *
         */
        if (this.options.isLoaded) {
            this.init();
        }


        this.circleMove = function (key) {
            var rad = (self.options.animate.svgLength / self.options.timers[key].maxValue) * (self.options.timers[key].maxValue - self.options.timers[key].value);
            self.options.timers[key].teg.children[1].style.strokeDashoffset = String(rad);

        };

        // console.log(self.options.timers.second.value);
    }

    /**
     *
     * @type {HTMLElement}
     */
    var button = document.getElementById('button');
    var buttonPause = document.getElementById('pause');
    var count = new Counter({
        endData: "2019-8-29-22-51-00",
        box: document.querySelector(".counter"),
        animateStatus: true,
        events: {
            start: function () {
                console.log("Counter was started");
            },
            end: function () {
                console.log("Counter was end");
            },
        },
        isLoaded: false,
    });
    button.addEventListener('click', count.init);
    buttonPause.addEventListener('click', count.pause);
})();