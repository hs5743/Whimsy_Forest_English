const COURSE_DATA = {
  "grades": [
    {
      "id": "lower",
      "name": "Lower Grades",
      "zh": "低年級",
      "village": "幼苗村",
      "icon": "🌱",
      "mascot": "Foxy",
      "mascotZh": "小狐狸 Foxy",
      "asset": "assets/fox-guide.png",
      "subtitle": "短句、圖像提示、慢速跟讀",
      "story": "從生活中的問候、家人與教室對話開始，慢慢建立開口說英語的信心。",
      "themes": [
        {
          "id": "greetings",
          "title": "Greetings",
          "zh": "問候語",
          "scene": "問候花園",
          "color": "green",
          "lessons": [
            {
              "id": "hello-friend",
              "title": "Hello, Friend!",
              "zh": "你好，朋友！",
              "keywords": [
                "hello",
                "friend",
                "fine"
              ],
              "prompt": "向新朋友打招呼，並問候對方。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Hello, Amy!",
                  "translation": "嗨，Amy！"
                },
                {
                  "speaker": "B",
                  "text": "Hi, Ben!",
                  "translation": "嗨，Ben！"
                },
                {
                  "speaker": "A",
                  "text": "How are you?",
                  "translation": "你好嗎？"
                },
                {
                  "speaker": "B",
                  "text": "I am fine, thank you.",
                  "translation": "我很好，謝謝。"
                }
              ]
            },
            {
              "id": "good-morning",
              "title": "Good Morning",
              "zh": "早安問候",
              "keywords": [
                "morning",
                "teacher",
                "nice"
              ],
              "prompt": "早上進教室時，向老師打招呼。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Good morning, Ms. Lee.",
                  "translation": "李老師，早安。"
                },
                {
                  "speaker": "B",
                  "text": "Good morning, Tom.",
                  "translation": "Tom，早安。"
                },
                {
                  "speaker": "A",
                  "text": "Nice to see you.",
                  "translation": "很高興見到你。"
                },
                {
                  "speaker": "B",
                  "text": "Nice to see you, too.",
                  "translation": "我也很高興見到你。"
                }
              ]
            }
          ]
        },
        {
          "id": "feelings",
          "title": "Feelings",
          "zh": "情緒表達",
          "scene": "心情小徑",
          "color": "pink",
          "lessons": [
            {
              "id": "happy-today",
              "title": "I Feel Happy",
              "zh": "我今天很開心",
              "keywords": [
                "happy",
                "today",
                "great"
              ],
              "prompt": "說出你今天的感覺。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "How do you feel today?",
                  "translation": "你今天感覺如何？"
                },
                {
                  "speaker": "B",
                  "text": "I feel happy.",
                  "translation": "我覺得很開心。"
                },
                {
                  "speaker": "A",
                  "text": "That is great!",
                  "translation": "那太好了！"
                },
                {
                  "speaker": "B",
                  "text": "Thank you.",
                  "translation": "謝謝。"
                }
              ]
            },
            {
              "id": "a-little-sad",
              "title": "A Little Sad",
              "zh": "有一點難過",
              "keywords": [
                "sad",
                "okay",
                "help"
              ],
              "prompt": "練習說出難過的感受，並接受朋友的關心。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "You look sad.",
                  "translation": "你看起來很難過。"
                },
                {
                  "speaker": "B",
                  "text": "I am a little sad.",
                  "translation": "我有一點難過。"
                },
                {
                  "speaker": "A",
                  "text": "Are you okay?",
                  "translation": "你還好嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes. Thank you for asking.",
                  "translation": "我還好，謝謝你關心。"
                }
              ]
            }
          ]
        },
        {
          "id": "classroom",
          "title": "Classroom",
          "zh": "教室生活",
          "scene": "教室廣場",
          "color": "blue",
          "lessons": [
            {
              "id": "my-pencil",
              "title": "My Pencil",
              "zh": "我的鉛筆",
              "keywords": [
                "pencil",
                "book",
                "desk"
              ],
              "prompt": "介紹一樣教室裡的物品。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "What is this?",
                  "translation": "這是什麼？"
                },
                {
                  "speaker": "B",
                  "text": "It is a pencil.",
                  "translation": "這是一枝鉛筆。"
                },
                {
                  "speaker": "A",
                  "text": "Is it yours?",
                  "translation": "這是你的嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes, it is.",
                  "translation": "是的。"
                }
              ]
            },
            {
              "id": "open-your-book",
              "title": "Open Your Book",
              "zh": "打開課本",
              "keywords": [
                "open",
                "book",
                "page"
              ],
              "prompt": "練習聽懂並回應課堂指令。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Please open your book.",
                  "translation": "請打開課本。"
                },
                {
                  "speaker": "B",
                  "text": "Okay.",
                  "translation": "好的。"
                },
                {
                  "speaker": "A",
                  "text": "Turn to page ten.",
                  "translation": "翻到第十頁。"
                },
                {
                  "speaker": "B",
                  "text": "I am ready.",
                  "translation": "我準備好了。"
                }
              ]
            }
          ]
        },
        {
          "id": "family",
          "title": "Family",
          "zh": "我的家人",
          "scene": "家庭小屋",
          "color": "gold",
          "lessons": [
            {
              "id": "this-is-my-mom",
              "title": "This Is My Mom",
              "zh": "這是我的媽媽",
              "keywords": [
                "mom",
                "dad",
                "family"
              ],
              "prompt": "介紹一位家人。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Who is she?",
                  "translation": "她是誰？"
                },
                {
                  "speaker": "B",
                  "text": "She is my mom.",
                  "translation": "她是我的媽媽。"
                },
                {
                  "speaker": "A",
                  "text": "She looks kind.",
                  "translation": "她看起來很親切。"
                },
                {
                  "speaker": "B",
                  "text": "Yes, she is.",
                  "translation": "是的。"
                }
              ]
            },
            {
              "id": "my-brother",
              "title": "My Brother",
              "zh": "我的哥哥／弟弟",
              "keywords": [
                "brother",
                "play",
                "together"
              ],
              "prompt": "介紹兄弟姊妹和一起做的活動。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Do you have a brother?",
                  "translation": "你有兄弟嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes, I do.",
                  "translation": "有。"
                },
                {
                  "speaker": "A",
                  "text": "What do you do together?",
                  "translation": "你們會一起做什麼？"
                },
                {
                  "speaker": "B",
                  "text": "We play together.",
                  "translation": "我們會一起玩。"
                }
              ]
            }
          ]
        },
        {
          "id": "daily-life",
          "title": "Daily Life",
          "zh": "日常生活",
          "scene": "陽光小路",
          "color": "purple",
          "lessons": [
            {
              "id": "breakfast-time",
              "title": "Breakfast Time",
              "zh": "早餐時間",
              "keywords": [
                "breakfast",
                "milk",
                "bread"
              ],
              "prompt": "說出早餐想吃或想喝的東西。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "What do you want for breakfast?",
                  "translation": "早餐想吃什麼？"
                },
                {
                  "speaker": "B",
                  "text": "I want some bread.",
                  "translation": "我想吃一些麵包。"
                },
                {
                  "speaker": "A",
                  "text": "Would you like some milk?",
                  "translation": "你想喝牛奶嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes, please.",
                  "translation": "好，謝謝。"
                }
              ]
            },
            {
              "id": "time-for-bed",
              "title": "Time for Bed",
              "zh": "睡覺時間",
              "keywords": [
                "bed",
                "tired",
                "good night"
              ],
              "prompt": "練習睡前對話。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Are you tired?",
                  "translation": "你累了嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes, I am.",
                  "translation": "是的。"
                },
                {
                  "speaker": "A",
                  "text": "It is time for bed.",
                  "translation": "該睡覺了。"
                },
                {
                  "speaker": "B",
                  "text": "Good night.",
                  "translation": "晚安。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "middle",
      "name": "Middle Grades",
      "zh": "中年級",
      "village": "綠葉鎮",
      "icon": "🍃",
      "mascot": "Bunny",
      "mascotZh": "小兔 Bunny",
      "asset": "assets/rabbit-guide.png",
      "subtitle": "完整回答、情境對話、角色扮演",
      "story": "進入更多生活情境，練習完整回應、邀請他人與表達需求。",
      "themes": [
        {
          "id": "school-life",
          "title": "School Life",
          "zh": "校園生活",
          "scene": "校園廣場",
          "color": "green",
          "lessons": [
            {
              "id": "borrow-pencil",
              "title": "Borrowing a Pencil",
              "zh": "借一枝鉛筆",
              "keywords": [
                "borrow",
                "pencil",
                "sure"
              ],
              "prompt": "有禮貌地向同學借一枝鉛筆。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "May I borrow your pencil?",
                  "translation": "我可以借你的鉛筆嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Sure. Here you are.",
                  "translation": "可以，給你。"
                },
                {
                  "speaker": "A",
                  "text": "Thank you very much.",
                  "translation": "非常謝謝你。"
                },
                {
                  "speaker": "B",
                  "text": "You are welcome.",
                  "translation": "不客氣。"
                }
              ]
            },
            {
              "id": "where-is-library",
              "title": "Where Is the Library?",
              "zh": "圖書館在哪裡？",
              "keywords": [
                "library",
                "next to",
                "office"
              ],
              "prompt": "詢問校園中的一個地點。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Excuse me. Where is the library?",
                  "translation": "不好意思，圖書館在哪裡？"
                },
                {
                  "speaker": "B",
                  "text": "It is next to the office.",
                  "translation": "它在辦公室旁邊。"
                },
                {
                  "speaker": "A",
                  "text": "Thank you for your help.",
                  "translation": "謝謝你的幫忙。"
                },
                {
                  "speaker": "B",
                  "text": "No problem.",
                  "translation": "不客氣。"
                }
              ]
            }
          ]
        },
        {
          "id": "hobbies",
          "title": "Hobbies",
          "zh": "興趣",
          "scene": "興趣工坊",
          "color": "pink",
          "lessons": [
            {
              "id": "after-school",
              "title": "After School",
              "zh": "放學後的興趣",
              "keywords": [
                "draw",
                "after school",
                "join"
              ],
              "prompt": "介紹你的興趣，並邀請朋友一起參加。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "What do you like to do after school?",
                  "translation": "你放學後喜歡做什麼？"
                },
                {
                  "speaker": "B",
                  "text": "I like to draw pictures.",
                  "translation": "我喜歡畫畫。"
                },
                {
                  "speaker": "A",
                  "text": "That sounds fun.",
                  "translation": "聽起來很有趣。"
                },
                {
                  "speaker": "B",
                  "text": "Would you like to join me?",
                  "translation": "你想和我一起嗎？"
                }
              ]
            },
            {
              "id": "play-basketball",
              "title": "Let’s Play Basketball",
              "zh": "一起打籃球",
              "keywords": [
                "basketball",
                "practice",
                "together"
              ],
              "prompt": "邀請朋友一起運動。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Can you play basketball?",
                  "translation": "你會打籃球嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes, but I need more practice.",
                  "translation": "會，但我需要多練習。"
                },
                {
                  "speaker": "A",
                  "text": "Let us practice together.",
                  "translation": "我們一起練習吧。"
                },
                {
                  "speaker": "B",
                  "text": "That is a great idea.",
                  "translation": "這是個好主意。"
                }
              ]
            }
          ]
        },
        {
          "id": "food",
          "title": "Food",
          "zh": "飲食",
          "scene": "美食市集",
          "color": "gold",
          "lessons": [
            {
              "id": "lunch-time",
              "title": "Lunch Time",
              "zh": "午餐時間",
              "keywords": [
                "lunch",
                "rice",
                "juice"
              ],
              "prompt": "說出你想吃的午餐。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "What do you want for lunch?",
                  "translation": "你午餐想吃什麼？"
                },
                {
                  "speaker": "B",
                  "text": "I want rice and chicken.",
                  "translation": "我想吃飯和雞肉。"
                },
                {
                  "speaker": "A",
                  "text": "Would you like some juice?",
                  "translation": "你想喝果汁嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes, please.",
                  "translation": "好的，謝謝。"
                }
              ]
            },
            {
              "id": "healthy-snack",
              "title": "A Healthy Snack",
              "zh": "健康點心",
              "keywords": [
                "healthy",
                "fruit",
                "snack"
              ],
              "prompt": "選擇一種健康點心並說明原因。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "What snack would you like?",
                  "translation": "你想吃什麼點心？"
                },
                {
                  "speaker": "B",
                  "text": "I would like some fruit.",
                  "translation": "我想吃一些水果。"
                },
                {
                  "speaker": "A",
                  "text": "Why do you choose fruit?",
                  "translation": "你為什麼選水果？"
                },
                {
                  "speaker": "B",
                  "text": "Because it is healthy.",
                  "translation": "因為它很健康。"
                }
              ]
            }
          ]
        },
        {
          "id": "weather",
          "title": "Weather",
          "zh": "天氣",
          "scene": "天氣廣場",
          "color": "blue",
          "lessons": [
            {
              "id": "rainy-day",
              "title": "A Rainy Day",
              "zh": "下雨天",
              "keywords": [
                "rainy",
                "umbrella",
                "outside"
              ],
              "prompt": "談論下雨天該帶什麼。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "What is the weather like today?",
                  "translation": "今天天氣如何？"
                },
                {
                  "speaker": "B",
                  "text": "It is rainy.",
                  "translation": "今天下雨。"
                },
                {
                  "speaker": "A",
                  "text": "Do you have an umbrella?",
                  "translation": "你有帶雨傘嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes, I do.",
                  "translation": "有。"
                }
              ]
            },
            {
              "id": "hot-afternoon",
              "title": "A Hot Afternoon",
              "zh": "炎熱的下午",
              "keywords": [
                "hot",
                "water",
                "shade"
              ],
              "prompt": "在炎熱天氣中提出適當建議。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "It is very hot this afternoon.",
                  "translation": "今天下午很熱。"
                },
                {
                  "speaker": "B",
                  "text": "Let us drink some water.",
                  "translation": "我們喝點水吧。"
                },
                {
                  "speaker": "A",
                  "text": "Can we sit in the shade?",
                  "translation": "我們可以坐在陰涼處嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Sure. That is a good idea.",
                  "translation": "可以，這是個好主意。"
                }
              ]
            }
          ]
        },
        {
          "id": "shopping",
          "title": "Shopping",
          "zh": "購物",
          "scene": "小鎮商店",
          "color": "purple",
          "lessons": [
            {
              "id": "buy-a-notebook",
              "title": "Buying a Notebook",
              "zh": "買一本筆記本",
              "keywords": [
                "notebook",
                "price",
                "dollars"
              ],
              "prompt": "詢問商品價格並完成購買。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "How much is this notebook?",
                  "translation": "這本筆記本多少錢？"
                },
                {
                  "speaker": "B",
                  "text": "It is three dollars.",
                  "translation": "三元。"
                },
                {
                  "speaker": "A",
                  "text": "I will take it.",
                  "translation": "我要買。"
                },
                {
                  "speaker": "B",
                  "text": "Thank you.",
                  "translation": "謝謝。"
                }
              ]
            },
            {
              "id": "choose-a-shirt",
              "title": "Choosing a Shirt",
              "zh": "挑選上衣",
              "keywords": [
                "shirt",
                "size",
                "try on"
              ],
              "prompt": "詢問尺寸並試穿衣服。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Do you have this shirt in a larger size?",
                  "translation": "這件上衣有大一點的尺寸嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes, we do.",
                  "translation": "有。"
                },
                {
                  "speaker": "A",
                  "text": "May I try it on?",
                  "translation": "我可以試穿嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Of course.",
                  "translation": "當然可以。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "upper",
      "name": "Upper Grades",
      "zh": "高年級",
      "village": "大樹城",
      "icon": "🌳",
      "mascot": "Ollie",
      "mascotZh": "貓頭鷹 Ollie",
      "asset": "assets/owl-guide.png",
      "subtitle": "表達想法、多輪對話、任務挑戰",
      "story": "挑戰意見表達、問題解決與思辨任務，讓英語成為更有力量的溝通工具。",
      "themes": [
        {
          "id": "opinions",
          "title": "Opinions",
          "zh": "表達意見",
          "scene": "想法廣場",
          "color": "green",
          "lessons": [
            {
              "id": "school-uniforms",
              "title": "School Uniforms",
              "zh": "校服討論",
              "keywords": [
                "opinion",
                "comfortable",
                "agree"
              ],
              "prompt": "針對校服表達自己的看法，並提出一個理由。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "What do you think about school uniforms?",
                  "translation": "你對校服有什麼看法？"
                },
                {
                  "speaker": "B",
                  "text": "I think they are useful and comfortable.",
                  "translation": "我認為校服實用又舒服。"
                },
                {
                  "speaker": "A",
                  "text": "I agree, but students also need choices.",
                  "translation": "我同意，但學生也需要選擇。"
                },
                {
                  "speaker": "B",
                  "text": "That is a good point.",
                  "translation": "這個觀點很好。"
                }
              ]
            },
            {
              "id": "homework-time",
              "title": "How Much Homework?",
              "zh": "作業該有多少？",
              "keywords": [
                "homework",
                "balance",
                "opinion"
              ],
              "prompt": "針對作業量表達意見並提出平衡方法。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Do students have too much homework?",
                  "translation": "學生的作業是不是太多了？"
                },
                {
                  "speaker": "B",
                  "text": "Sometimes, yes. We also need time to rest.",
                  "translation": "有時候是。我們也需要休息時間。"
                },
                {
                  "speaker": "A",
                  "text": "How can we find a better balance?",
                  "translation": "我們要如何取得更好的平衡？"
                },
                {
                  "speaker": "B",
                  "text": "Teachers can give shorter but meaningful tasks.",
                  "translation": "老師可以安排較短但有意義的任務。"
                }
              ]
            }
          ]
        },
        {
          "id": "environment",
          "title": "Environment",
          "zh": "環境議題",
          "scene": "綠色地球公園",
          "color": "blue",
          "lessons": [
            {
              "id": "less-plastic",
              "title": "Use Less Plastic",
              "zh": "減少使用塑膠",
              "keywords": [
                "plastic",
                "reusable",
                "environment"
              ],
              "prompt": "提出一個減少塑膠使用的方法，並說明理由。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "How can we use less plastic?",
                  "translation": "我們要如何減少使用塑膠？"
                },
                {
                  "speaker": "B",
                  "text": "We can bring reusable bottles and bags.",
                  "translation": "我們可以攜帶可重複使用的水瓶和袋子。"
                },
                {
                  "speaker": "A",
                  "text": "Why is that important?",
                  "translation": "為什麼這很重要？"
                },
                {
                  "speaker": "B",
                  "text": "Because it helps protect the environment.",
                  "translation": "因為這有助於保護環境。"
                }
              ]
            },
            {
              "id": "save-energy",
              "title": "Saving Energy at School",
              "zh": "在學校節約能源",
              "keywords": [
                "energy",
                "lights",
                "save"
              ],
              "prompt": "提出兩個在學校節約能源的方法。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "How can our school save energy?",
                  "translation": "我們的學校要如何節約能源？"
                },
                {
                  "speaker": "B",
                  "text": "We can turn off lights when we leave.",
                  "translation": "離開時可以關燈。"
                },
                {
                  "speaker": "A",
                  "text": "What else can we do?",
                  "translation": "我們還能做什麼？"
                },
                {
                  "speaker": "B",
                  "text": "We can use fans wisely and open the windows.",
                  "translation": "我們可以適當使用電扇並打開窗戶。"
                }
              ]
            }
          ]
        },
        {
          "id": "friendship",
          "title": "Friendship",
          "zh": "友誼",
          "scene": "友誼橋樑",
          "color": "pink",
          "lessons": [
            {
              "id": "help-a-friend",
              "title": "Helping a Friend",
              "zh": "幫助朋友",
              "keywords": [
                "worried",
                "listen",
                "help"
              ],
              "prompt": "關心一位緊張的朋友，並提出一項幫助。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "You look worried. What happened?",
                  "translation": "你看起來很擔心。發生什麼事了？"
                },
                {
                  "speaker": "B",
                  "text": "I am nervous about tomorrow's test.",
                  "translation": "我對明天的考試感到緊張。"
                },
                {
                  "speaker": "A",
                  "text": "I can study with you after school.",
                  "translation": "我放學後可以和你一起讀書。"
                },
                {
                  "speaker": "B",
                  "text": "Thank you. That would really help.",
                  "translation": "謝謝，那真的會有幫助。"
                }
              ]
            },
            {
              "id": "solve-a-conflict",
              "title": "Solving a Conflict",
              "zh": "解決衝突",
              "keywords": [
                "misunderstanding",
                "sorry",
                "solve"
              ],
              "prompt": "用冷靜的方式處理朋友之間的誤會。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "I think we had a misunderstanding.",
                  "translation": "我想我們之間有一些誤會。"
                },
                {
                  "speaker": "B",
                  "text": "You are right. I was upset and did not listen.",
                  "translation": "你說得對。我當時很生氣，沒有好好聽。"
                },
                {
                  "speaker": "A",
                  "text": "Can we talk and solve it together?",
                  "translation": "我們可以談一談，一起解決嗎？"
                },
                {
                  "speaker": "B",
                  "text": "Yes. I am sorry for what happened.",
                  "translation": "可以。我對發生的事情感到抱歉。"
                }
              ]
            }
          ]
        },
        {
          "id": "travel",
          "title": "Travel",
          "zh": "旅行",
          "scene": "旅行車站",
          "color": "gold",
          "lessons": [
            {
              "id": "ask-for-directions",
              "title": "Asking for Directions",
              "zh": "詢問方向",
              "keywords": [
                "directions",
                "station",
                "turn left"
              ],
              "prompt": "詢問前往車站的方向。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Excuse me. How can I get to the train station?",
                  "translation": "不好意思，我要怎麼去火車站？"
                },
                {
                  "speaker": "B",
                  "text": "Go straight and turn left at the bank.",
                  "translation": "直走，在銀行左轉。"
                },
                {
                  "speaker": "A",
                  "text": "Is it far from here?",
                  "translation": "離這裡遠嗎？"
                },
                {
                  "speaker": "B",
                  "text": "No. It is about five minutes away.",
                  "translation": "不遠，大約五分鐘。"
                }
              ]
            },
            {
              "id": "at-the-hotel",
              "title": "At the Hotel",
              "zh": "在飯店",
              "keywords": [
                "reservation",
                "room",
                "check in"
              ],
              "prompt": "在飯店櫃檯辦理入住。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "Hello. I have a reservation under the name Lin.",
                  "translation": "你好，我用 Lin 的名字訂了房。"
                },
                {
                  "speaker": "B",
                  "text": "Welcome. May I see your passport, please?",
                  "translation": "歡迎。可以看一下你的護照嗎？"
                },
                {
                  "speaker": "A",
                  "text": "Sure. Here it is.",
                  "translation": "可以，給你。"
                },
                {
                  "speaker": "B",
                  "text": "Thank you. Your room is on the fifth floor.",
                  "translation": "謝謝。你的房間在五樓。"
                }
              ]
            }
          ]
        },
        {
          "id": "future",
          "title": "Future Dreams",
          "zh": "未來夢想",
          "scene": "夢想高塔",
          "color": "purple",
          "lessons": [
            {
              "id": "future-job",
              "title": "My Future Job",
              "zh": "未來的工作",
              "keywords": [
                "future",
                "job",
                "because"
              ],
              "prompt": "說出未來想從事的工作並說明原因。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "What do you want to be in the future?",
                  "translation": "你未來想成為什麼？"
                },
                {
                  "speaker": "B",
                  "text": "I want to be a scientist.",
                  "translation": "我想成為科學家。"
                },
                {
                  "speaker": "A",
                  "text": "Why do you want to be a scientist?",
                  "translation": "你為什麼想成為科學家？"
                },
                {
                  "speaker": "B",
                  "text": "Because I want to solve important problems.",
                  "translation": "因為我想解決重要問題。"
                }
              ]
            },
            {
              "id": "learning-goal",
              "title": "My Learning Goal",
              "zh": "我的學習目標",
              "keywords": [
                "goal",
                "practice",
                "improve"
              ],
              "prompt": "設定一個英語學習目標並提出做法。",
              "dialogue": [
                {
                  "speaker": "A",
                  "text": "What is your English learning goal?",
                  "translation": "你的英語學習目標是什麼？"
                },
                {
                  "speaker": "B",
                  "text": "I want to speak more confidently.",
                  "translation": "我想更有自信地說英語。"
                },
                {
                  "speaker": "A",
                  "text": "How will you improve?",
                  "translation": "你要如何進步？"
                },
                {
                  "speaker": "B",
                  "text": "I will practice speaking for ten minutes every day.",
                  "translation": "我每天會練習說英語十分鐘。"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};


const state = {
  gradeId: "lower",
  themeId: null,
  lesson: null,
  lineIndex: 0,
  mode: "listen",
  role: "A",
  showTranslation: false,
  xp: Number(localStorage.getItem("wfv41-xp") || 0),
  completed: Number(localStorage.getItem("wfv41-completed") || 0),
  completedLessons: JSON.parse(localStorage.getItem("wfv41-lessons") || "[]"),
  badges: JSON.parse(localStorage.getItem("wfv41-badges") || '{"map":false,"listener":false,"speaker":false}')
};

const $ = id => document.getElementById(id);
const els = {
  gradeCards: $("gradeCards"),
  mapTitle: $("mapTitle"),
  mapSubtitle: $("mapSubtitle"),
  guideCard: $("guideCard"),
  mapProgressText: $("mapProgressText"),
  mapProgressFill: $("mapProgressFill"),
  themeMapNodes: $("themeMapNodes"),
  showAllThemes: $("showAllThemes"),
  lessonHeading: $("lessonHeading"),
  lessonSubheading: $("lessonSubheading"),
  gradeStatus: $("gradeStatus"),
  themeStatus: $("themeStatus"),
  lessonCount: $("lessonCount"),
  lessonGrid: $("lessonGrid"),
  lessonMeta: $("lessonMeta"),
  dialogueCounter: $("dialogueCounter"),
  modeTabs: $("modeTabs"),
  accentSelect: $("accentSelect"),
  speedSelect: $("speedSelect"),
  roleSelectWrap: $("roleSelectWrap"),
  roleSelect: $("roleSelect"),
  speechStack: $("speechStack"),
  speakerImageA: $("speakerImageA"),
  speakerImageB: $("speakerImageB"),
  promptText: $("promptText"),
  translationToggle: $("translationToggle"),
  translationBox: $("translationBox"),
  playButton: $("playButton"),
  slowButton: $("slowButton"),
  recordButton: $("recordButton"),
  nextButton: $("nextButton"),
  statusDot: $("statusDot"),
  recordStatus: $("recordStatus"),
  recognizedText: $("recognizedText"),
  wordAnalysis: $("wordAnalysis"),
  feedbackBadge: $("feedbackBadge"),
  feedbackText: $("feedbackText"),
  practiceCompanion: $("practiceCompanion"),
  levelValue: $("levelValue"),
  xpText: $("xpText"),
  progressFill: $("progressFill"),
  stars: $("stars"),
  badgeMap: $("badgeMap"),
  badgeListener: $("badgeListener"),
  badgeSpeaker: $("badgeSpeaker"),
  resetButton: $("resetButton"),
  keywordList: $("keywordList"),
  headerXp: $("headerXp"),
  headerLevel: $("headerLevel"),
  toast: $("toast")
};

const nodePositions = [
  {left:"7%", top:"12%", icon:"🌼"},
  {left:"39%", top:"8%", icon:"🏡"},
  {left:"67%", top:"19%", icon:"🏫"},
  {left:"16%", top:"48%", icon:"🍎"},
  {left:"58%", top:"55%", icon:"🌉"}
];

function grades(){ return COURSE_DATA.grades; }
function currentGrade(){ return grades().find(g => g.id === state.gradeId); }
function currentTheme(){ return currentGrade().themes.find(t => t.id === state.themeId) || null; }
function currentLessons(){
  if(state.themeId) return currentTheme().lessons.map(l => ({...l, _theme:currentTheme()}));
  return currentGrade().themes.flatMap(t => t.lessons.map(l => ({...l, _theme:t})));
}
function lessonLines(){ return state.lesson?.dialogue || []; }
function currentLine(){ return lessonLines()[state.lineIndex]; }

function saveState(){
  localStorage.setItem("wfv41-xp", String(state.xp));
  localStorage.setItem("wfv41-completed", String(state.completed));
  localStorage.setItem("wfv41-lessons", JSON.stringify(state.completedLessons));
  localStorage.setItem("wfv41-badges", JSON.stringify(state.badges));
}
function showToast(message){
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2200);
}
function showXpFloater(amount){
  const el = document.createElement('div');
  el.className = 'xp-floater';
  el.textContent = `+${amount} XP`;
  // Position near the XP display in the sidebar
  const xpEl = els.xpText;
  if(xpEl){
    const rect = xpEl.getBoundingClientRect();
    el.style.left = (rect.left + rect.width / 2 - 30) + 'px';
    el.style.top  = (rect.top + window.scrollY - 10) + 'px';
  } else {
    el.style.left = '50%';
    el.style.top  = '50%';
  }
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}
function addXp(amount, message){
  state.xp += amount;
  saveState();
  renderProgress();
  showXpFloater(amount);
  if(message) showToast(`+${amount} XP｜${message}`);
}
function markLessonCompleted(){
  if(!state.lesson) return;
  if(!state.completedLessons.includes(state.lesson.id)){
    state.completedLessons.push(state.lesson.id);
    state.completed += 1;
    saveState();
  }
}

function renderProgress(){
  const level = Math.floor(state.xp / 100) + 1;
  const xp = state.xp % 100;
  els.levelValue.textContent = level;
  els.headerLevel.textContent = level;
  els.headerXp.textContent = state.xp;
  els.xpText.textContent = `${xp} / 100 XP`;
  els.progressFill.style.width = `${xp}%`;
  const starCount = Math.min(3, Math.floor(state.completed / 3));
  [...els.stars.children].forEach((star,i) => {
    star.textContent = i < starCount ? "★" : "☆";
    star.classList.toggle('lit', i < starCount);
  });
  [["map",els.badgeMap],["listener",els.badgeListener],["speaker",els.badgeSpeaker]].forEach(([key,el])=>{
    el.classList.toggle("locked",!state.badges[key]);
    el.classList.toggle("unlocked",!!state.badges[key]);
  });
  renderMapProgress();
}

function renderGradeCards(){
  els.gradeCards.innerHTML = "";
  grades().forEach(grade => {
    const total = grade.themes.reduce((sum,t)=>sum+t.lessons.length,0);
    const card = document.createElement("article");
    card.className = `route-card ${grade.id}`;
    card.innerHTML = `
      <div class="route-card-top">
        <img src="${grade.asset}" alt="${grade.mascotZh}">
        <div>
          <span class="wood-label">${grade.name}</span>
          <h3>${grade.zh}</h3>
          <strong>${grade.village}</strong>
          <p>${grade.subtitle}</p>
        </div>
      </div>
      <div class="route-card-body">
        <p>${grade.story}</p>
        <div class="route-tags">
          <span>${grade.themes.length} 個主題</span>
          <span>${total} 堂課</span>
          <span>${grade.mascotZh}</span>
        </div>
        <button class="route-button" type="button">進入 ${grade.village}</button>
      </div>
    `;
    card.querySelector(".route-button").addEventListener("click",()=>selectGrade(grade.id,true));
    els.gradeCards.appendChild(card);
  });
}

function selectGrade(id){
  state.gradeId = id;
  state.themeId = null;
  state.badges.map = true;
  saveState();
  renderGradeContent();
  renderProgress();
  if(typeof window.navigateTo === 'function') window.navigateTo('map');
}

function renderGradeContent(){
  const grade = currentGrade();
  els.mapTitle.textContent = `${grade.village}學習地圖`;
  els.mapSubtitle.textContent = `${grade.mascotZh} 將陪你探索 ${grade.themes.length} 個主題站點。`;
  els.lessonHeading.textContent = `${grade.village}課程卡片`;
  els.lessonSubheading.textContent = grade.story;
  els.gradeStatus.textContent = `${grade.zh}｜${grade.village}`;

  els.guideCard.innerHTML = `
    <img src="${grade.asset}" alt="${grade.mascotZh}">
    <h3>${grade.mascotZh}</h3>
    <p>${grade.subtitle}</p>
    <strong>今天一起探索 ${grade.village}！</strong>
  `;

  els.practiceCompanion.innerHTML = `
    <img src="${grade.asset}" alt="${grade.mascotZh}">
    <h3>${grade.mascotZh}</h3>
    <p>${grade.story}</p>
  `;

  renderMapNodes();
  renderLessons();
  renderMapProgress();
  syncSpeakerImages();
  if(typeof window.refreshReveal === 'function') setTimeout(window.refreshReveal, 50);
}

function renderMapProgress(){
  const grade = currentGrade();
  const ids = grade.themes.flatMap(t=>t.lessons.map(l=>l.id));
  const completed = ids.filter(id=>state.completedLessons.includes(id)).length;
  els.mapProgressText.textContent = `${completed} / ${ids.length}`;
  els.mapProgressFill.style.width = `${ids.length ? (completed/ids.length)*100 : 0}%`;
}

function renderMapNodes(){
  const grade = currentGrade();
  els.themeMapNodes.innerHTML = "";
  grade.themes.forEach((theme,index)=>{
    const btn = document.createElement("button");
    const pos = nodePositions[index];
    btn.type = "button";
    btn.className = `map-node ${theme.color}${state.themeId===theme.id?" active":""}`;
    btn.style.left = pos.left;
    btn.style.top = pos.top;
    const completed = theme.lessons.filter(l=>state.completedLessons.includes(l.id)).length;
    btn.innerHTML = `
      <span class="node-icon">${pos.icon}</span>
      <strong>${theme.zh}</strong>
      <span>${theme.scene}</span>
      <small>⭐ ${completed} / ${theme.lessons.length}</small>
    `;
    btn.addEventListener("click",()=>{
      state.themeId = theme.id;
      renderMapNodes();
      renderLessons();
      if(typeof window.navigateTo === 'function') window.navigateTo('lessons');
    });
    els.themeMapNodes.appendChild(btn);
  });
  if(typeof window.refreshReveal === 'function') setTimeout(window.refreshReveal, 50);
}

function renderLessons(){
  const grade = currentGrade();
  const lessons = currentLessons();
  const theme = currentTheme();
  els.themeStatus.textContent = theme ? `${theme.zh}｜${theme.scene}` : "全部主題";
  els.lessonCount.textContent = `${lessons.length} 堂課`;
  els.lessonGrid.innerHTML = "";

  lessons.forEach((lesson,index)=>{
    const card = document.createElement("article");
    card.className = `lesson-card ${grade.id}`;
    const done = state.completedLessons.includes(lesson.id);
    card.innerHTML = `
      <div class="lesson-card-header">
        <img src="${grade.asset}" alt="${grade.mascotZh}">
        <div>
          <span class="wood-label">${lesson._theme.zh}</span>
          <h3>${lesson.zh}</h3>
          <strong>${lesson.title}</strong>
        </div>
      </div>
      <div class="lesson-card-body">
        <div class="lesson-meta-line">
          <span>${lesson._theme.scene}</span>
          <span>${done ? "⭐ 已完成" : `Lesson ${index+1}`}</span>
        </div>
        <p>${lesson.prompt}</p>
        <div class="lesson-keywords">${lesson.keywords.map(k=>`<span>${k}</span>`).join("")}</div>
        <button class="start-lesson" type="button">${done ? "再次練習" : "開始練習"}</button>
      </div>
    `;
    card.querySelector(".start-lesson").addEventListener("click",()=>openLesson(lesson));
    els.lessonGrid.appendChild(card);
  });
}

function openLesson(lesson){
  state.lesson = lesson;
  state.lineIndex = 0;
  state.mode = "listen";
  state.showTranslation = false;
  document.querySelectorAll(".mode-button").forEach(b=>b.classList.toggle("active",b.dataset.mode==="listen"));
  els.lessonMeta.textContent = `${lesson.zh}｜${lesson.title}`;
  els.promptText.textContent = lesson.prompt;
  els.translationToggle.textContent = "顯示中文提示";
  renderKeywords();
  renderTranslation();
  syncModeUI();
  renderSpeechStack();
  if(typeof window.navigateTo === 'function') window.navigateTo('practice');
  showToast(`已開啟：${lesson.zh}`);
}

function syncSpeakerImages(){
  const grade = currentGrade();
  els.speakerImageA.src = grade.asset;
  els.speakerImageB.src = grade.id==="lower" ? "assets/rabbit-guide.png" : grade.id==="middle" ? "assets/fox-guide.png" : "assets/rabbit-guide.png";
}

function renderSpeechStack(){
  els.speechStack.innerHTML = "";
  syncSpeakerImages();
  
  const currentLineObj = currentLine();
  if (state.lesson && currentLineObj) {
    els.speakerImageA.parentElement.classList.toggle("active-speaker", currentLineObj.speaker === "A");
    els.speakerImageB.parentElement.classList.toggle("active-speaker", currentLineObj.speaker === "B");
  } else {
    els.speakerImageA.parentElement.classList.remove("active-speaker");
    els.speakerImageB.parentElement.classList.remove("active-speaker");
  }

  if(!state.lesson){
    els.speechStack.innerHTML = `<div class="speech-bubble"><span class="speaker-label">A:</span><div><div class="line-main">請先從課程卡片選擇一堂課</div><div class="line-sub">Choose a lesson to begin.</div></div><span>🌟</span></div>`;
    els.dialogueCounter.textContent = "1 / 4";
    return;
  }

  lessonLines().forEach((line,index)=>{
    const hiddenForRole = state.mode==="roleplay" && line.speaker===state.role;
    const bubble = document.createElement("button");
    bubble.type = "button";
    bubble.className = `speech-bubble ${line.speaker==="B"?"bubble-b":""}${index===state.lineIndex?" active":""}${hiddenForRole?" hidden-line":""}`;
    bubble.innerHTML = `
      <span class="speaker-label">${line.speaker}:</span>
      <div>
        <div class="line-main">${hiddenForRole ? "__________" : line.text}</div>
        <div class="line-sub">${hiddenForRole ? "輪到你自己說這一句" : state.showTranslation ? line.translation : "Tap to listen"}</div>
      </div>
      <span>🔊</span>
    `;
    bubble.addEventListener("click",()=>{
      state.lineIndex = index;
      renderSpeechStack();
      if(!hiddenForRole) speak(line.text,line.speaker);
    });
    els.speechStack.appendChild(bubble);
  });
  els.dialogueCounter.textContent = `${state.lineIndex+1} / ${lessonLines().length}`;
}

function renderTranslation(){
  if(!state.lesson){
    els.translationBox.innerHTML = "";
    els.translationBox.classList.add("hidden");
    return;
  }
  els.translationBox.innerHTML = state.lesson.dialogue.map(line=>`<p><strong>${line.speaker}：</strong>${line.translation}</p>`).join("");
  els.translationBox.classList.toggle("hidden",!state.showTranslation);
}
function renderKeywords(){
  if(!state.lesson){
    els.keywordList.innerHTML = `<span class="keyword-empty">請先選擇一堂課</span>`;
    return;
  }
  els.keywordList.innerHTML = "";
  state.lesson.keywords.forEach(word=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "keyword-pill";
    btn.textContent = word;
    btn.addEventListener("click",()=>speak(word,"A",.8));
    els.keywordList.appendChild(btn);
  });
}
function syncModeUI(){
  els.roleSelectWrap.classList.toggle("hidden",state.mode!=="roleplay");
  renderSpeechStack();
}

function accent(){ return els.accentSelect.value; }
function rate(){ return Number(els.speedSelect.value || .95); }
function pickVoice(role){
  const voices = speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith(accent().slice(0,2).toLowerCase()));
  return voices[role==="A"?0:Math.min(1,voices.length-1)] || null;
}
function speak(text,role="A",speed=rate()){
  if(!("speechSynthesis" in window)){ showToast("此瀏覽器不支援語音朗讀。"); return Promise.resolve(); }
  return new Promise(resolve=>{
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = accent();
    u.rate = speed;
    u.pitch = role==="A"?1.04:.96;
    const voice = pickVoice(role);
    if(voice) u.voice = voice;
    u.onend = resolve;
    u.onerror = resolve;
    speechSynthesis.speak(u);
  });
}
async function playConversation(speed=rate()){
  if(!state.lesson){ showToast("請先選擇一堂課。"); return; }
  for(const line of lessonLines()){
    await speak(line.text,line.speaker,speed);
    await new Promise(r=>setTimeout(r,220));
  }
  state.badges.listener = true;
  addXp(10,"完成完整對話聆聽");
}

function tokenize(text){
  return text.toLowerCase().replace(/[.,!?;:'’"]/g,"").split(/\s+/).filter(Boolean);
}
function analyzeWords(expectedText,spokenText){
  const expected = tokenize(expectedText);
  const spoken = tokenize(spokenText);
  const html = [];
  expected.forEach(word=>html.push(`<span class="word-token ${spoken.includes(word)?"correct":"missing"}">${word}</span>`));
  spoken.filter(word=>!expected.includes(word)).forEach(word=>html.push(`<span class="word-token extra">+ ${word}</span>`));
  els.wordAnalysis.innerHTML = html.join("") || "<p>這次沒有足夠的語音可分析。</p>";
  return Math.round(expected.filter(word=>spoken.includes(word)).length/Math.max(1,expected.length)*100);
}
function currentTargetLine(){
  const line = currentLine();
  if(!line) return null;
  if(state.mode==="roleplay" && line.speaker!==state.role) return null;
  return line;
}
function startRecognition(expectedText){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ showToast("語音辨識需要 Chrome 或 Edge。"); return; }

  const recognition = new SR();
  recognition.lang = accent();
  recognition.interimResults = true;
  recognition.continuous = false;
  let finalTranscript = "";

  recognition.onstart = ()=>{
    els.statusDot.classList.add("listening");
    els.recordStatus.textContent = "正在聆聽，請開始說英文…";
    els.recognizedText.textContent = "Listening…";
    els.wordAnalysis.innerHTML = "<p>正在分析你的跟讀內容…</p>";
    els.feedbackBadge.textContent = "Recording";
  };
  recognition.onresult = event=>{
    let interim = "";
    for(let i=event.resultIndex;i<event.results.length;i++){
      const result = event.results[i];
      if(result.isFinal) finalTranscript += result[0].transcript;
      else interim += result[0].transcript;
    }
    els.recognizedText.textContent = finalTranscript || interim;
  };
  recognition.onerror = ()=>{
    els.statusDot.classList.remove("listening");
    els.recordStatus.textContent = "錄音未完成，請再試一次";
  };
  recognition.onend = ()=>{
    els.statusDot.classList.remove("listening");
    if(!finalTranscript.trim()){
      els.recordStatus.textContent = "沒有偵測到完整語音";
      els.feedbackBadge.textContent = "Try again";
      return;
    }
    const score = analyzeWords(expectedText,finalTranscript);
    els.recordStatus.textContent = "語音辨識完成";
    els.recognizedText.textContent = finalTranscript;
    els.feedbackBadge.textContent = `${score}%`;
    if(score>=85){
      els.feedbackText.textContent = "Great job! 內容非常完整。";
      addXp(20,"高完整度口說");
    }else if(score>=60){
      els.feedbackText.textContent = "Nice try! 再聽一次會更穩定。";
      addXp(10,"完成口說練習");
    }else{
      els.feedbackText.textContent = "Keep trying! 建議先慢速聽，再整句說。";
      addXp(5,"勇敢開口");
    }
    state.badges.speaker = true;
    markLessonCompleted();
    saveState();
    renderProgress();
    renderLessons();
    renderMapNodes();
  };
  recognition.start();
}

function nextLine(){
  if(!state.lesson){ showToast("請先選擇一堂課。"); return; }
  state.lineIndex = (state.lineIndex+1)%lessonLines().length;
  if(state.lineIndex===0){
    markLessonCompleted();
    renderLessons();
    renderMapNodes();
    renderProgress();
  }
  renderSpeechStack();
}

function bindEvents(){
  document.querySelectorAll("[data-scroll]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const target = btn.dataset.scroll;
      if(typeof window.navigateTo === 'function'){
        window.navigateTo(target.replace('#',''));
      } else {
        document.querySelector(target)?.scrollIntoView({behavior:"smooth",block:"start"});
      }
    });
  });
  els.showAllThemes.addEventListener("click",()=>{
    state.themeId = null;
    renderMapNodes();
    renderLessons();
  });
  els.modeTabs.querySelectorAll(".mode-button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      state.mode = btn.dataset.mode;
      els.modeTabs.querySelectorAll(".mode-button").forEach(b=>b.classList.toggle("active",b===btn));
      syncModeUI();
    });
  });
  els.roleSelect.addEventListener("change",()=>{
    state.role = els.roleSelect.value;
    renderSpeechStack();
  });
  els.translationToggle.addEventListener("click",()=>{
    state.showTranslation = !state.showTranslation;
    els.translationToggle.textContent = state.showTranslation ? "隱藏中文提示" : "顯示中文提示";
    renderTranslation();
    renderSpeechStack();
  });
  els.playButton.addEventListener("click",()=>playConversation(rate()));
  els.slowButton.addEventListener("click",()=>playConversation(.62));
  els.nextButton.addEventListener("click",nextLine);
  els.recordButton.addEventListener("click",async()=>{
    if(!state.lesson){ showToast("請先選擇一堂課。"); return; }
    const target = currentTargetLine();
    if(!target){
      await speak(currentLine().text,currentLine().speaker,rate());
      showToast("這一句是系統角色，請按下一句或切換角色。");
      return;
    }
    startRecognition(target.text);
  });
  els.resetButton.addEventListener("click",()=>{
    if(!confirm("確定要清除本機儲存的學習進度嗎？")) return;
    state.xp = 0;
    state.completed = 0;
    state.completedLessons = [];
    state.badges = {map:false,listener:false,speaker:false};
    state.gradeId = "lower";
    state.themeId = null;
    state.lesson = null;
    saveState();
    renderProgress();
    renderLessons();
    renderMapNodes();
    if(typeof window.navigateTo === 'function') window.navigateTo('home', true);
    showToast("學習進度已重設，歡迎重新踏入森林！");
  });
}

function init(){
  renderGradeCards();
  renderGradeContent();
  renderSpeechStack();
  renderKeywords();
  renderTranslation();
  renderProgress();
  bindEvents();
}
init();

/* ══ Multi-View Navigation System ══════════════════════════ */
(function initNavigation(){

  /* ── State ── */
  const navHistory  = ['home'];
  let   currentViewId = 'home';

  /* ── Breadcrumb text per view ── */
  function getBreadcrumb(viewId){
    const grade  = (typeof currentGrade  === 'function') ? currentGrade()  : null;
    const theme  = (typeof currentTheme  === 'function') ? currentTheme()  : null;
    const lesson = state.lesson || null;
    const parts  = [];
    if(grade  && !['home','routeSelector'].includes(viewId)) parts.push('🌿 ' + grade.village);
    if(theme  &&  ['lessons','practice'].includes(viewId))    parts.push(theme.zh);
    if(lesson &&   viewId === 'practice')                     parts.push(lesson.zh);
    return parts.join(' › ');
  }

  /* ── Update header for current view ── */
  function updateHeader(viewId){
    const backBtn      = document.getElementById('backBtn');
    const breadcrumbEl = document.getElementById('breadcrumbBar');
    if(!backBtn || !breadcrumbEl) return;
    if(viewId === 'home'){
      backBtn.hidden      = true;
      breadcrumbEl.hidden = true;
    } else {
      backBtn.hidden = false;
      const crumb = getBreadcrumb(viewId);
      if(crumb){ breadcrumbEl.textContent = crumb; breadcrumbEl.hidden = false; }
      else      { breadcrumbEl.hidden = true; }
    }
  }

  /* ── Core navigateTo ── */
  window.navigateTo = function(viewId, isBack = false){
    /* Use currentViewId (not navHistory tail) to avoid bug after back-pop */
    if(currentViewId === viewId) return;

    const fromView = document.getElementById(currentViewId);
    const nextView = document.getElementById(viewId);
    if(!nextView) return;

    /* Deactivate current */
    if(fromView) fromView.classList.remove('active');

    /* Animate next */
    nextView.classList.remove('view-enter', 'view-enter-back');
    void nextView.offsetWidth; /* force reflow */
    nextView.classList.add('active', isBack ? 'view-enter-back' : 'view-enter');
    nextView.addEventListener('animationend', () => {
      nextView.classList.remove('view-enter', 'view-enter-back');
    }, { once: true });

    /* Scroll to top */
    nextView.scrollTo({ top: 0, behavior: 'instant' });

    /* Update history */
    if(!isBack) navHistory.push(viewId);

    /* Track current */
    currentViewId = viewId;
    updateHeader(viewId);
    if(typeof window.refreshReveal === 'function') setTimeout(window.refreshReveal, 80);
  };

  /* ── Back navigation (fix: track current before pop) ── */
  window.navigateBack = function(){
    if(navHistory.length <= 1) return;
    navHistory.pop(); /* remove current from history */
    const prevId = navHistory[navHistory.length - 1];
    /* currentViewId still holds old view, so navigateTo won't early-return */
    window.navigateTo(prevId, true);
  };

  /* ── Button wiring ── */
  document.getElementById('backBtn')?.addEventListener('click', window.navigateBack);

  document.getElementById('brandBtn')?.addEventListener('click', () => {
    navHistory.length = 0;
    navHistory.push('home');
    window.navigateTo('home', true);
  });

  document.getElementById('startAdventureBtn')?.addEventListener('click', () => {
    window.navigateTo('routeSelector');
  });

  /* ── Returning user: always start fresh from home ──
     (avoids the "stuck on map" UX issue; user can tap through quickly) */
  updateHeader('home');
})();

/* ══ Scroll-Reveal (IntersectionObserver) ═════════════════ */
const _revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('animate-in');
      _revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

window.refreshReveal = function(){
  const targets = document.querySelectorAll(
    '.route-card:not(.animate-in), .lesson-card:not(.animate-in), ' +
    '.map-node:not(.animate-in), .sidebar-card:not(.animate-in), ' +
    '.guide-card:not(.animate-in), .daily-task-card:not(.animate-in), ' +
    '.mini-progress-card:not(.animate-in)'
  );
  targets.forEach(el => {
    if(!el.classList.contains('reveal')) el.classList.add('reveal');
    _revealObserver.observe(el);
  });
};
window.refreshReveal();
