let text1 = document.getElementById('text1')
let mainName = document.getElementById('main-heading')
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let mainText = document.getElementById('mainText')
let allButtoms = document.getElementById('allButtoms')
let mainHeading = document.getElementById('main-heading')



let wordAnimal = ['ЛЕВ', 'НОСОРОГ', 'ЛАМА', 'ЛОШАДЬ', 'ОБЕЗЬЯНА', 'ЖИРАФ', 'КИТ', 'АКУЛА', 'ЛЕБЕДЬ']
let wordsCar = ['ФОРД', 'ЖИГУЛИ', 'ВОЛГА', 'МЕРСЕДЕС', 'ВОЛЬВО', 'СКАНИЯ', 'ШЕВРОЛЕ', 'ШКОДА', 'ТОЙОТА']
let wordsThree = ['ДУБ', 'ЯСЕН', 'БЕРЕЗА', 'ИВА', 'ПАЛЬМА', 'ТУЯ', 'ЯБЛОНЯ']
let wordsFruits = ['ЯБЛОКО', 'БАНАН', 'КИВИ', 'АНАНАС', 'ВИНОГРАД', 'АБРИКОС', 'АРБУЗ', 'ГРУША', 'ХУРМА']
let wordsFood = ['КОЛБАСА', 'ОГУРЕЦ', 'ПОМИДОРЫ', 'КАРТОШКА', 'ГЕРКУЛЕС', 'ГРЕЧА', 'РИС',]
let allThemes = [wordAnimal, wordsCar, wordsThree, wordsFruits, wordsFood]

let randomTheme = allThemes[Math.floor(Math.random() * allThemes.length)]

let themeWord
if (randomTheme === wordAnimal) {
    themeWord = 'Тема Животные'
} else if (randomTheme === wordsFood) {
    themeWord = 'Тема еда'
} else if (randomTheme === wordsFruits) {
    themeWord = 'Тема Фрукты'
} else if (randomTheme === wordsThree) {
    themeWord = 'Тема Деревья'
} else if (randomTheme === wordsCar) {
    themeWord = 'Тема Машины'
}

let themeWords = document.getElementById('themeWordId') 

let startGame = function () {
    
    mainHeading.innerHTML = ' '
    buttonPlay.innerHTML = 'ПЕРЕЗАПУСТИТЬ ИГРУ'
    buttonPlay.onclick = function () {
        location.reload()
    }
    // userPanel.innerHTML = "<input id='knopka' type='button' value='А'>" +
    //     "<button id = 'button2'> Б</button>"
    allButtoms.innerHTML = "<span id = 'bukva1'>А</span>" +
        "<span id = 'bukva2'>Б</span>" +
        "<span id = 'bukva3'>В</span>" +
        "<span id = 'bukva4'>Г</span>" +
        "<span id = 'bukva5'>Д</span>" +
        "<span id = 'bukva6'>Е</span>" +
        "<span id = 'bukva7'>Ё</span>" +
        "<span id = 'bukva8'>Ж</span>" +
        "<span id = 'bukva9'>З</span>" +
        "<span id = 'bukva10'>И</span>" +
        "<span id = 'bukva11'>Й</span>" + "<p></p>" +
        "<span id = 'bukva12'>К</span>" +
        "<span id = 'bukva13'>Л</span>" +
        "<span id = 'bukva14'>М</span>" +
        "<span id = 'bukva15'>Н</span>" +
        "<span id = 'bukva16'>О</span>" +
        "<span id = 'bukva17'>П</span>" +
        "<span id = 'bukva18'>Р</span>" +
        "<span id = 'bukva19'>С</span>" +
        "<span id = 'bukva20'>Т</span>" +
        "<span id = 'bukva21'>У</span>" +
        "<span id = 'bukva22'>Ф</span>" + "<p></p>" +
        "<span id = 'bukva23'>Х</span>" +
        "<span id = 'bukva24'>Ц</span>" +
        "<span id = 'bukva25'>Ч</span>" +
        "<span id = 'bukva26'>Ш</span>" +
        "<span id = 'bukva27'>Щ</span>" +
        "<span id = 'bukva28'>Ъ</span>" +
        "<span id = 'bukva29'>Ы</span>" +
        "<span id = 'bukva30'>Ь</span>" +
        "<span id = 'bukva31'>Э</span>" +
        "<span id = 'bukva32'>Ю</span>" +
        "<span id = 'bukva33'>Я</span>"






    let word = randomTheme[Math.floor(Math.random() * randomTheme.length)]
    let lives = 8;
    let answerArray = [];
    let remainingLetters = word.length
    let wrong = word.includes(onclick)
    themeWordID.innerHTML = themeWord 

    for (i = 0; i < word.length; i++) {
        answerArray[i] = '_'
    }
    mainText.innerHTML = 'Угадай слово  !   ' + answerArray.join('  ') + '  (' + word.length + '  букв) '



    bukva1.onclick = function (event) {

        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            lives--;
            alert('Ты не угадал')
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }

        }
        else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')

        }
        bukva1.innerHTML = ' '
    }
    bukva2.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            lives--;
            alert('Нет такой буквы')
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }

        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')
                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva2.innerHTML = ' '

    }
    bukva3.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva3.innerHTML = ' '

    }
    bukva4.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            lives--;
            alert('Нет такой буквы')
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva4.innerHTML = ' '

    }
    bukva5.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            lives--;
            alert('Нет такой буквы')
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {

                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva5.innerHTML = ' '

    }
    bukva6.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva6.innerHTML = ' '

    }
    bukva7.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva7.innerHTML = ' '

    }
    bukva8.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            lives--;
            alert('Нет такой буквы')
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva8.innerHTML = ' '

    }
    bukva9.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva9.innerHTML = ' '

    }
    bukva10.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva10.innerHTML = ' '

    }
    bukva11.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva11.innerHTML = ' '

    }
    bukva12.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva12.innerHTML = ' '

    }
    bukva13.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva13.innerHTML = ' '

    }
    bukva14.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            lives--;
            alert('Нет такой буквы')
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva14.innerHTML = ' '

    }
    bukva15.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva15.innerHTML = ' '

    }
    bukva16.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva16.innerHTML = ' '

    }
    bukva17.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva17.innerHTML = ' '

    }
    bukva18.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva18.innerHTML = ' '

    }
    bukva19.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')
                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva19.innerHTML = ' '

    }
    bukva20.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva20.innerHTML = ' '

    }
    bukva21.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva21.innerHTML = ' '

    }
    bukva22.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')
                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva22.innerHTML = ' '

    }
    bukva23.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva23.innerHTML = ' '

    }
    bukva24.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            lives--;
            alert('Нет такой буквы')
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva24.innerHTML = ' '

    }
    bukva25.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva25.innerHTML = ' '

    }
    bukva26.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva26.innerHTML = ' '

    }
    bukva27.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva27.innerHTML = ' '

    }
    bukva28.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')
                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva28.innerHTML = ' '

    }
    bukva29.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')
                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva29.innerHTML = ' '

    }
    bukva30.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva30.innerHTML = ' '

    }
    bukva31.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            alert('Нет такой буквы')
            lives--;
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }
        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva31.innerHTML = ' '

    }
    bukva32.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            lives--;
            alert('Нет такой буквы')
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva32.innerHTML = ' '

    }
    bukva33.onclick = function (event) {
        let userAnswer = this.innerHTML
        let wrongAnswer = word.includes(userAnswer)
        if (!wrongAnswer) {
            lives--;
            alert('Нет такой буквы')
            if (lives === 4) {
                animationSkelet1()
            } else if (lives == 3) {
                animationSkelet2()
            } else if (lives == 2) {
                animationSkelet3()
            } else if (lives == 1) {
                animationSkelet4()
            } else if (lives == 0) {
                animationSkelet5()
            }


        } else {
            for (j = 0; j < word.length; j++) {
                let double = userAnswer === answerArray[j]
                if (double) {
                    alert('уже нажимал эту букву')
                } else if (word[j] === userAnswer) {
                    answerArray[j] = userAnswer
                    remainingLetters--;
                    mainText.innerHTML = answerArray.join('  ')

                }
            }
        } if (remainingLetters === 0) {
            alert('ПОБЕДА')
        }
        bukva33.innerHTML = ' '

    }

    let animationSkelet1 = function () {
        ctx.lineWidth = 3
        //Голова
        ctx.beginPath()
        ctx.fillStyle = 'brown'
        ctx.fillRect(300, 100, 30, 30)
        ctx.fill()
    }
    let animationSkelet2 = function () {
        //тело и НОГИ
        ctx.beginPath()
        ctx.moveTo(315, 130)
        ctx.lineTo(315, 250)
        ctx.lineTo(355, 280)
        ctx.moveTo(315, 250)
        ctx.lineTo(275, 280)
        ctx.stroke()
    }
    let animationSkelet3 = function () {
        //руки
        ctx.beginPath()
        ctx.moveTo(315, 180)
        ctx.lineTo(275, 150)
        ctx.moveTo(315, 180)
        ctx.lineTo(355, 150)
        ctx.stroke()
    }
    let animationSkelet4 = function () {
        //Висельница
        ctx.beginPath()
        ctx.moveTo(400, 300)
        ctx.lineTo(400, 50)
        ctx.lineTo(250, 50)
        ctx.moveTo(400, 100)
        ctx.lineTo(350, 50)
        ctx.moveTo(380, 300)
        ctx.lineTo(420, 300)
        ctx.stroke()
        ctx.strokeStyle = 'black'
        alert('ВНИМАНИЕ ОШИБАТЬСЯ БОЛЬШЕ НЕЛЬЗЯ')
    }
    let animationSkelet5 = function () {
        //веревка
        ctx.beginPath()
        ctx.moveTo(315, 50)
        ctx.lineTo(315, 100)
        ctx.stroke()
        let i = confirm('ТЫ УМЕР КОНЕЦ ИГРЕ, СЫГРАТЬ ЕЩЁ?')
        if (i) {
            location.reload()
        } else if (!i) {
            alert('Возвращайся')
        }

    }




}

// while (remainingLetters > 0) {
//     if (lives === 0) {
//         alert('GAME OVER');
//         break;
//     }
//     let quess = prompt(' Угадай букву! Слово состоит из ' + word.length + ' букв:  ' + answerArray.join('  ') + '  У тебя осталось ' + lives + ' попыток.');
//     quess = quess.toLowerCase();
//     let wrong = word.includes(quess);


//     if (quess === null) {
//         break;
//     } else if (!wrong) {
//         lives--;
//         alert("Ты ошибся такой буквы нету");
//     }
//     else if (quess.length !== 1 && quess.length !== 0) {
//         alert('нужно угадывать по 1 букве')
//     } else if (quess.length !== 1 && quess) {
//         alert('нужна написать только 1 букву!')
//     } else if (!quess.length) {
//         alert('ты ничего не написал')
//     } else {
//         for (j = 0; j < word.length; j++) {
//             let double = answerArray[j] === quess;
//             if (double) {
//                 alert('Ты уже вводил эту букву');

//             } else if (quess === word[j]) {
//                 answerArray[j] = quess;
//                 remainingLetters--;
//             }
//         }
//     }
//     if (remainingLetters === 0) {
//         alert('Молодец! Ты угадал слово:  ' + word + ' !');
//         break;
//     }
// }