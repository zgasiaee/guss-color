$(document).ready(function () {

  const getColor = () => {
    var r = (Math.random() * 255).toFixed(0)
    var g = (Math.random() * 255).toFixed(0)
    var b = (Math.random() * 255).toFixed(0)

    $('.color').html(`rgb(${r},${g},${b})`)
    return `${r},${g},${b}`
  }

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  const makeColor = () => {

    getColor()
    var colors = [getColor()]
    for (var i = 0; i < 5; i++) {
      colors.push(getColor())
    }

    const newColors = shuffleArray(colors)
    for (var j = 0; j < 6; j++) {
      $('.card').eq(j).css('background-color', `rgb(${newColors[j]})`)
    }
  }

  makeColor()


  $('.card').click(function () {
    var titleColor = $('.color').html()
    var correctColor = `rgb(${titleColor.split(',')[0].split('(')[1]}, ${
      titleColor.split(',')[1]
    }, ${titleColor.split(',')[2]}`

    if ($(this).css('background-color') === correctColor) {
      $('.changeColor').html('PLAY AGAIN')
      $('.result').html('CORRECT')
      $('.card').css('background-color', correctColor)
      $('.navContainer').css('background-color', correctColor)
    } else {
      var mistake = $('.mistake').html()
      $('.mistake').html(++mistake)
      $(this).css('background-color', '#232323')
    }
  })

  $('.changeColor').click(function () {
    makeColor()
    $('.changeColor').html('NEW COLORS')
    $('.mistake').html(0)
    $('.result').html('')
    $('.navContainer').css('background-color', '#2c8e99')
  })


})
