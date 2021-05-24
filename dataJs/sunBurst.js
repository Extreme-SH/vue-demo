var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
var bgColor = '#2E2733';

var itemStyle = {
  star5: {
    color: colors[0]
  },
  star4: {
    color: colors[1]
  },
  star3: {
    color: colors[2]
  },
  star2: {
    color: colors[3]
  }
};

var data = [{
  name: '古龙',
  itemStyle: {
    color: colors[1]
  },
  children: [{
    name: '',
    children: [{
      name: '5☆',
      children: [{
        name: '炎王龙'
      }, {
        name: '炎妃龙'
      }, {
        name: '雷神龙'
      }]
    }, {
      name: '4☆',
      children: [{
        name: '风神龙'
      }, {
        name: '灭尽龙'
      }, {
        name: '黑龙'
      }]
    }, {
      name: '3☆',
      children: [{
        name: '红龙'
      }]
    }]
  }, {
    name: '红黑龙',
    children: [{
      name: '5☆',
      children: [{
        name: '红焰龙'
      }]
    }, {
      name: '4☆',
      children: [{
        name: '祖龙'
      }, {
        name: '岚龙'
      }]
    }, {
      name: '3☆',
      children: [{
        name: '溟波龙'
      }]
    }]
  }]
}, {
  name: '非古龙',
  itemStyle: {
    color: colors[2]
  },
  children: [{
    name: '轰龙',
    children: [{
      name: '5☆',
      children: [{
        name: '碎龙'
      }]
    }, {
      name: '4☆',
      children: [{
        name: '斩龙'
      }, {
        name: '电龙'
      }]
    }, {
      name: '3☆',
      children: [{
        name: '泡狐龙'
      }]
    }]
  }, {
    name: '黑轰龙',
    children: [{
      name: '5☆',
      children: [{
        name: '大轰龙'
      }]
    }, {
      name: '4☆',
      children: [{
        name: '荒钩爪'
      }, {
        name: '青电主'
      }, {
        name: '银领'
      }]
    }, {
      name: '3☆',
      children: [{
        name: '烬灭刃'
      }]
    }]
  }, {
    name: '天眼',
    children: [{
      name: '5☆',
      children: [{
        name: '雷狼龙'
      }]
    }, {
      name: '4☆',
      children: [{
        name: '金雷公'
      }, {
        name: '红兜'
      }]
    }, {
      name: '3☆'
    }, {
      name: '2☆',
      children: [{
        name: '独眼'
      }]
    }]
  }, {
    name: '紫毒姬',
    children: [{
      name: '4☆',
      children: [{
        name: '黑炎王'
      }, {
        name: '海龙'
      }, {
        name: '白海龙'
      }]
    }]
  }, {
    name: '冥海龙',
    children: [{
      name: '5☆',
      children: [{
        name: '千仞龙'
      }]
    }, {
      name: '4☆',
      children: [{
        name: '大贼龙'
      }, {
        name: '蛮鄂龙'
      }]
    }, {
      name: '3☆',
      children: [{
        name: '雷鄂龙'
      }]
    }]
  }, {
    name: '黑狼鸟',
    children: [{
      name: '4☆',
      children: [{
        name: '巨兽'
      }]
    }]
  }, {
    name: '宝批龙',
    children: [{
      name: '5☆',
      children: [{
        name: '霸王龙'
      }]
    }, {
      name: '4☆',
      children: [{
        name: '宝批龙✌'
      }]
    }]
  }]
}];

for (var j = 0; j < data.length; ++j) {
  var level1 = data[j].children;
  for (var i = 0; i < level1.length; ++i) {
    var block = level1[i].children;
    var bookScore = [];
    var bookScoreId;
    for (var star = 0; star < block.length; ++star) {
      var style = (function (name) {
        switch (name) {
          case '5☆':
            bookScoreId = 0;
            return itemStyle.star5;
          case '4☆':
            bookScoreId = 1;
            return itemStyle.star4;
          case '3☆':
            bookScoreId = 2;
            return itemStyle.star3;
          case '2☆':
            bookScoreId = 3;
            return itemStyle.star2;
        }
      })(block[star].name);

      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5
        }
      };

      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color
        };
        block[star].children.forEach(function (book) {
          book.value = 1;
          book.itemStyle = style;

          book.label = {
            color: style.color
          };

          var value = 1;
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5;
          }

          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value;
          }
          else {
            bookScore[bookScoreId] = {
              color: colors[bookScoreId],
              value: value
            };
          }
        });
      }
    }

    level1[i].itemStyle = {
      color: data[j].itemStyle.color
    };
  }
}

var option = {
  backgroundColor: bgColor,
  color: colors,
  series: [{
    type: 'sunburst',
    center: ['50%', '48%'],
    data: data,
    sort: function (a, b) {
      if (a.depth === 1) {
        return b.getValue() - a.getValue();
      }
      else {
        return a.dataIndex - b.dataIndex;
      }
    },
    label: {
      rotate: 'radial',
      color: bgColor
    },
    itemStyle: {
      borderColor: bgColor,
      borderWidth: 2
    },
    levels: [{}, {
      r0: 0,
      r: 40,
      label: {
        rotate: 0
      }
    }, {
      r0: 40,
      r: 105
    }, {
      r0: 115,
      r: 140,
      itemStyle: {
        shadowBlur: 2,
        shadowColor: colors[2],
        color: 'transparent'
      },
      label: {
        rotate: 'tangential',
        fontSize: 10,
        color: colors[0]
      }
    }, {
      r0: 140,
      r: 145,
      itemStyle: {
        shadowBlur: 80,
        shadowColor: colors[0]
      },
      label: {
        position: 'outside',
        textShadowBlur: 5,
        textShadowColor: '#333'
      },
      downplay: {
        label: {
          opacity: 0.5
        }
      }
    }]
  }]
};

export {option};
