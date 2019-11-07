(function () {
    function Calculator(option) {
        var self = this;
        this.options = {
            create: {
                wrapper: {
                    teg: 'div',
                    attributes: {
                        'class': 'wrapper'
                    }
                },
                logotype: {
                    teg: 'span',
                    attributes: {
                        'class': 'logotype'
                    },
                    text: 'Citizen'
                },
                display: {
                    teg: 'div',
                    attributes: {
                        'class': 'display',
                    },
                    text: '0',
                    box: 0
                },
                keyboard: {
                    teg: 'ul',
                    attributes: {
                        'class': 'keyboard'
                    },
                },
                li: {
                    teg: 'li',
                    attributes: {
                        'class': 'bottom',
                        dataAttribute: ['C', 'del', '()', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '-/+', '0', '.', '='],
                    },
                }
            },
            saveElements: {},
            interface: '',
            box: option.box,
            flag: 0
        };

        function buildInterface() {
            var wrapper = buildTeg(self.options.create.wrapper);
            wrapper.appendChild(buildTeg(self.options.create.logotype));
            wrapper.appendChild(buildTeg(self.options.create.display));
            wrapper.appendChild(buildBottoms(self.options.create.li, buildTeg(self.options.create.keyboard)));
            self.options.box.appendChild(wrapper);
            self.options.create.display.box = document.querySelector('.display');
            console.log(self.options.create.display.box);
        }

        function buildTeg(obj) {
            var element = (obj.teg !== undefined) ? document.createElement(obj.teg) : undefined;
            if (obj.attributes) {
                for (var key in obj.attributes) {
                    element.setAttribute(key, obj.attributes[key]);
                }
            }
            if (obj.text) {
                element.textContent = obj.text;
            }
            return element;
        }

        function buildBottoms(obj2, parentElement) {
            for (var i = 0; i < self.options.create.li.attributes.dataAttribute.length; i++) {
                var element2 = (obj2.teg !== undefined) ? document.createElement(obj2.teg) : undefined;
                element2.dataset.attribute = obj2.attributes.dataAttribute[i];
                element2.setAttribute('class', obj2.attributes.class);
                if (i === 1) {
                    element2.textContent = '';
                } else {
                    element2.textContent = self.options.create.li.attributes.dataAttribute[i];
                }
                parentElement.appendChild(element2);
                element2.addEventListener('click', actions);
                console.log()
            }
            return parentElement;
        }

        function actions() {
            // console.log(this.getAttribute('data-attribute'));
            if (this.getAttribute('data-attribute') === 'C') {
                cleanDisplay()
            } else if (this.getAttribute('data-attribute') === '=') {
                result();
            } else if (this.getAttribute('data-attribute') === 'del') {
                delSymbol();
            } else if (this.getAttribute('data-attribute') === '()') {
                addTokens();
            }else if (this.getAttribute('data-attribute') === '-/+') {
                change();
            } else {
                displayContent(this);
            }
        }

        function displayContent(elem) {
            if (self.options.create.display.box.innerHTML === '0' && elem.getAttribute('data-attribute') === '.') {
                self.options.create.display.box.innerHTML += elem.getAttribute('data-attribute');
            } else if (self.options.create.display.box.innerHTML === '0') {
                self.options.create.display.box.innerHTML = elem.getAttribute('data-attribute');

            } else {
                self.options.create.display.box.innerHTML += elem.getAttribute('data-attribute');
            }
        }

        function result() {
            var result = eval(self.options.create.display.box.innerHTML);
            self.options.create.display.box.innerHTML = result;
        }

        function addTokens() {
            var text = self.options.create.display.box.innerHTML;
            if (self.options.create.display.box.innerHTML === '0') {
                self.options.flag++;
                self.options.create.display.box.innerHTML = '(';
            } else if (text.charCodeAt(text.length - 1) >= 48 && self.options.flag > 0) {
                self.options.flag--;
                self.options.create.display.box.innerHTML += ')';
            } else if (text.charCodeAt(text.length - 1) === 41 && self.options.flag > 0) {
                self.options.flag--;
                self.options.create.display.box.innerHTML += ')';
            } else if (text.charCodeAt(text.length - 1) <= 48 && text.charCodeAt(text.length - 1) !== 41) {
                self.options.flag++;
                self.options.create.display.box.innerHTML += '(';
            }
            // console.log(text.charCodeAt(text.length - 1));
            console.log(self.options.flag);
        }

        function change() {
            if(!isNaN(+self.options.create.display.box.innerHTML)){
                var digit = (+self.options.create.display.box.innerHTML);
                self.options.create.display.box.innerHTML = digit*(-1);
                //console.log(digit*(-1));
            }
            else {
                console.log('is nan')
            }
        }

        function delSymbol() {
            if(self.options.create.display.box.innerHTML.length > 1){
                var text = self.options.create.display.box.innerHTML.slice(0,self.options.create.display.box.innerHTML.length - 1);
                self.options.create.display.box.innerHTML = text;
            }else {
                cleanDisplay();
            }
            //console.log(text);
        }

        function cleanDisplay() {
            self.options.create.display.box.innerHTML = '0';
        }



        buildInterface();
    }


    var calc = new Calculator({
        box: document.getElementById('container'),
    });
})();