const fs = require('fs');

const userData = `
1,蝦夷,蠣崎慶広,26,伊勢,北畠具教
2,陸奥,伊達輝宗,27,志摩,九鬼嘉隆
3,陸中,南部晴政,28,近江,浅井長政
4,陸前,伊達政宗,29,山城,足利義輝
5,羽後,小野寺景道,30,大和,松永久秀
6,羽前,最上義光,31,紀伊,畠山高政
7,越後,上杉謙信,32,和泉,三好長慶
8,下野,宇都宮広綱,33,摂津,池田勝正
9,上野,長野業正,34,丹波,波多野秀治
10,常陸,佐竹義重,35,丹後,一色義道
11,下総,結城政勝,36,但馬,山名祐豊
12,上総,里見義堯,37,播磨,赤松義祐
13,安房,里見義弘,38,因幡,山名豊国
14,武蔵,太田資正,39,伯耆,南条宗勝
15,相模,北条氏康,40,出雲,尼子義久
16,甲斐,武田信玄,41,石見,毛利元就
17,信濃,村上義清,42,備前,宇喜多直家
18,駿河,今川義元,43,備中,三村家親
19,遠江,飯尾連龍,44,安芸,毛利隆元
20,三河,徳川家康,45,周防,大内義長
21,尾張,織田信長,46,阿波,三好義賢
22,美濃,斎藤道三,47,讃岐,十河一存
23,飛騨,姉小路良頼,48,伊予,河野通宣
24,越中,神保長職,49,土佐,長宗我部元親
25,能登,畠山義綱,50,筑前,大友宗麟
`.trim();

const lines = userData.split('\n');
const countries = [];
lines.forEach(l => {
  const p = l.split(',');
  countries.push({ id: parseInt(p[0]), name: p[1], gen: p[2] });
  countries.push({ id: parseInt(p[3]), name: p[4], gen: p[5] });
});
countries.sort((a,b) => a.id - b.id);

// Old general data mapping (to keep some stats if possible)
const oldGenStr = `    { id: 1, name: "蠣崎慶広", power: 45, intel: 55, soldiers: 800 },
    { id: 2, name: "津軽為信", power: 72, intel: 75, soldiers: 900 },
    { id: 3, name: "南部晴政", power: 78, intel: 68, soldiers: 1000 },
    { id: 4, name: "葛西晴信", power: 55, intel: 52, soldiers: 700 },
    { id: 5, name: "秋田愛季", power: 65, intel: 74, soldiers: 850 },
    { id: 6, name: "伊達輝宗", power: 76, intel: 82, soldiers: 1100 },
    { id: 7, name: "最上義守", power: 70, intel: 78, soldiers: 1000 },
    { id: 8, name: "結城晴朝", power: 62, intel: 65, soldiers: 800 },
    { id: 9, name: "葦名盛氏", power: 82, intel: 85, soldiers: 1200 },
    { id: 10, name: "上杉謙信", power: 99, intel: 88, soldiers: 1300 },
    { id: 11, name: "佐竹義重", power: 91, intel: 85, soldiers: 1100 },
    { id: 12, name: "宇都宮広綱", power: 58, intel: 60, soldiers: 750 },
    { id: 13, name: "里見義堯", power: 75, intel: 84, soldiers: 900 },
    { id: 14, name: "北条氏政", power: 82, intel: 85, soldiers: 1200 },
    { id: 15, name: "武田信玄", power: 98, intel: 96, soldiers: 1300 },
    { id: 16, name: "畠山義綱", power: 52, intel: 58, soldiers: 800 },
    { id: 17, name: "神保氏張", power: 58, intel: 55, soldiers: 700 },
    { id: 18, name: "姉小路自綱", power: 45, intel: 62, soldiers: 600 },
    { id: 19, name: "木曾義昌", power: 72, intel: 60, soldiers: 850 },
    { id: 20, name: "今川義元", power: 80, intel: 88, soldiers: 1300 },
    { id: 21, name: "本願寺光佐", power: 75, intel: 92, soldiers: 1100 },
    { id: 22, name: "朝倉義景", power: 68, intel: 72, soldiers: 900 },
    { id: 23, name: "斉藤義龍", power: 84, intel: 75, soldiers: 1000 },
    { id: 24, name: "徳川家康", power: 92, intel: 94, soldiers: 1100 },
    { id: 25, name: "織田信長", power: 94, intel: 92, soldiers: 1200 },
    { id: 26, name: "北畠具教", power: 78, intel: 65, soldiers: 900 },
    { id: 27, name: "浅井長政", power: 90, intel: 78, soldiers: 1000 },
    { id: 28, name: "六角義賢", power: 72, intel: 68, soldiers: 900 },
    { id: 29, name: "一色義道", power: 55, intel: 62, soldiers: 800 },
    { id: 30, name: "波多野秀治", power: 62, intel: 58, soldiers: 850 },
    { id: 31, name: "足利義昭", power: 30, intel: 75, soldiers: 500 },
    { id: 32, name: "筒井順慶", power: 65, intel: 88, soldiers: 800 },
    { id: 33, name: "三好長慶", power: 85, intel: 92, soldiers: 1200 },
    { id: 34, name: "堀内氏善", power: 68, intel: 55, soldiers: 700 },
    { id: 35, name: "山名豊国", power: 52, intel: 70, soldiers: 800 },
    { id: 36, name: "別所長治", power: 65, intel: 60, soldiers: 800 },
    { id: 37, name: "尼子晴久", power: 78, intel: 82, soldiers: 1000 },
    { id: 38, name: "宇喜多直家", power: 74, intel: 97, soldiers: 900 },
    { id: 39, name: "毛利元就", power: 85, intel: 99, soldiers: 1200 },
    { id: 40, name: "十河存保", power: 72, intel: 68, soldiers: 850 },
    { id: 41, name: "細川晴元", power: 55, intel: 75, soldiers: 800 },
    { id: 42, name: "河野通宣", power: 48, intel: 65, soldiers: 700 },
    { id: 43, name: "長宗我部元親", power: 92, intel: 88, soldiers: 1100 },
    { id: 44, name: "一条兼定", power: 25, intel: 40, soldiers: 500 },
    { id: 45, name: "城井鎮房", power: 78, intel: 62, soldiers: 850 },
    { id: 46, name: "龍造寺隆信", power: 94, intel: 72, soldiers: 1200 },
    { id: 47, name: "大友宗麟", power: 82, intel: 90, soldiers: 1100 },
    { id: 48, name: "阿蘇惟将", power: 65, intel: 58, soldiers: 800 },
    { id: 49, name: "伊東義祐", power: 68, intel: 75, soldiers: 850 },
    { id: 50, name: "島津貴久", power: 88, intel: 85, soldiers: 1200 }`;
const oldNameMap = {};
oldGenStr.split('\n').forEach(x => {
    let m = x.match(/name: "(.*?)"/);
    if(m) {
        let p = x.match(/power: (\d+)/);
        let i = x.match(/intel: (\d+)/);
        let s = x.match(/soldiers: (\d+)/);
        oldNameMap[m[1]] = {
            power: p ? parseInt(p[1]) : 50,
            intel: i ? parseInt(i[1]) : 50,
            soldiers: s ? parseInt(s[1]) : 500
        };
    }
});

let outGen = "const INITIAL_GENERALS = [\n";
let provNames = [];
countries.forEach((c, index) => {
    let p = 60 + Math.floor(Math.random()*40);
    let i = 60 + Math.floor(Math.random()*40);
    let s = 800 + Math.floor(Math.random()*400);
    if(oldNameMap[c.gen]) {
        p = oldNameMap[c.gen].power;
        i = oldNameMap[c.gen].intel;
        s = oldNameMap[c.gen].soldiers;
    }
    outGen += `    { id: ${c.id}, name: "${c.gen}", power: ${p}, intel: ${i}, soldiers: ${s} }${index<49?',':''}\n`;
    provNames.push(`"${c.name}"`);
});
outGen += "];\n\nconst PROVINCE_NAMES = [\n    ";
for(let k=0; k<50; k++) {
    outGen += provNames[k] + ", ";
    if((k+1)%10 === 0) outGen += "\n    ";
}
outGen += "];\n";

fs.writeFileSync('output_data.txt', outGen);
