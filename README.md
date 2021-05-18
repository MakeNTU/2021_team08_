# 自動烤棉花糖機 2.0 版

## 組別資訊
2021_team08_大肆老人吃飯糰

臺灣大學 電機四 張喬善 b06901079 <br>
臺灣大學 電機四 許家誠 b06502151 <br>
臺灣大學 電機四 吳兩原 b06901032 <br>

## 作品介紹
作品名稱：自動烤棉花糖機 2.0 版 <br>
作品用途：使用者可以自行在網頁上設定烤棉花糖的方式，自動烤棉花糖就會烤出 4 顆客製化的美味棉花糖，在烤的同時也可以在網頁上即時看到棉花糖的情況，<br>
DEMO影片連結：[https://youtu.be/BYy9Rd_AWzQ](https://youtu.be/BYy9Rd_AWzQ) <br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/BYy9Rd_AWzQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 運作方式

- 將棉花糖串上竹籤，放上支架
- 於網頁中進行設定，以下兩點決定了能否烤出外酥內軟的完美棉花糖
  - 烘烤時間：決定棉花糖的口感、融化的程度
  - 旋轉速度：決定棉花糖表面焦糖化的程度
- 按下「開始！」，並且在網站中即時觀看棉花糖烘烤的情況，如果已經達到理想的狀態可以終止烘烤並享用美味的烤棉花糖

### 如何實作
自動烤棉花糖機在實作上有兩大重點，一是烤棉花糖的硬體架構，二是使用者的操作介面
- 硬體架構
- 操作介面：自動烤棉花糖機是以 Arduino 來控制旋轉、RPi 來控制加熱，為了方便使用者操作，我們將控制權整合到一個網站之上，這個網站就架在 RPi 上，

### Dependencies / Requirements (用到哪些軟體、開發板、模組、工具...)

- 外殼：Autocad 繪製、雷切機切割
- 網站：
  - 前端：ReactJS, Material UI
  - 後端：Flask, PySerial
- 開發板：Raspberry Pi 3, Arduino UNO
- 模組：步進馬達、繼電器、Pi Camera
- 工具：焊槍、螺絲起子組、橡膠槌

## 工作分配

- 張喬善：外殼設計、控制程式
- 許家誠：外殼設計、機構組裝
- 吳兩原：網站架設、RPi 編寫