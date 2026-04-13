
// data.js content
const INITIAL_GENERALS = [
    { id: 1, name: "蠣崎慶広", power: 45, intel: 55, soldiers: 800 },
    { id: 2, name: "伊達輝宗", power: 76, intel: 82, soldiers: 1100 },
    { id: 3, name: "南部晴政", power: 78, intel: 68, soldiers: 1000 },
    { id: 4, name: "伊達政宗", power: 85, intel: 85, soldiers: 1200 },
    { id: 5, name: "小野寺景道", power: 65, intel: 74, soldiers: 850 },
    { id: 6, name: "最上義光", power: 70, intel: 78, soldiers: 1000 },
    { id: 7, name: "上杉謙信", power: 99, intel: 88, soldiers: 1300 },
    { id: 8, name: "宇都宮広綱", power: 58, intel: 60, soldiers: 750 },
    { id: 9, name: "長野業正", power: 70, intel: 85, soldiers: 900 },
    { id: 10, name: "佐竹義重", power: 91, intel: 85, soldiers: 1100 },
    { id: 11, name: "結城政勝", power: 62, intel: 65, soldiers: 800 },
    { id: 12, name: "里見義堯", power: 75, intel: 84, soldiers: 900 },
    { id: 13, name: "里見義弘", power: 72, intel: 75, soldiers: 850 },
    { id: 14, name: "太田資正", power: 68, intel: 75, soldiers: 900 },
    { id: 15, name: "北条氏康", power: 82, intel: 85, soldiers: 1200 },
    { id: 16, name: "武田信玄", power: 98, intel: 96, soldiers: 1300 },
    { id: 17, name: "村上義清", power: 80, intel: 60, soldiers: 850 },
    { id: 18, name: "今川義元", power: 80, intel: 88, soldiers: 1300 },
    { id: 19, name: "飯尾連龍", power: 60, intel: 60, soldiers: 700 },
    { id: 20, name: "徳川家康", power: 92, intel: 94, soldiers: 1100 },
    { id: 21, name: "織田信長", power: 94, intel: 92, soldiers: 1200 },
    { id: 22, name: "斎藤道三", power: 80, intel: 95, soldiers: 1000 },
    { id: 23, name: "姉小路良頼", power: 45, intel: 62, soldiers: 600 },
    { id: 24, name: "神保長職", power: 58, intel: 55, soldiers: 700 },
    { id: 25, name: "畠山義綱", power: 52, intel: 58, soldiers: 800 },
    { id: 26, name: "北畠具教", power: 78, intel: 65, soldiers: 900 },
    { id: 27, name: "九鬼嘉隆", power: 70, intel: 65, soldiers: 850 },
    { id: 28, name: "浅井長政", power: 90, intel: 78, soldiers: 1000 },
    { id: 29, name: "足利義輝", power: 85, intel: 60, soldiers: 900 },
    { id: 30, name: "松永久秀", power: 70, intel: 90, soldiers: 1000 },
    { id: 31, name: "畠山高政", power: 65, intel: 60, soldiers: 800 },
    { id: 32, name: "三好長慶", power: 85, intel: 92, soldiers: 1200 },
    { id: 33, name: "池田勝正", power: 65, intel: 65, soldiers: 800 },
    { id: 34, name: "波多野秀治", power: 62, intel: 58, soldiers: 850 },
    { id: 35, name: "一色義道", power: 55, intel: 62, soldiers: 800 },
    { id: 36, name: "山名祐豊", power: 55, intel: 60, soldiers: 800 },
    { id: 37, name: "赤松義祐", power: 50, intel: 55, soldiers: 800 },
    { id: 38, name: "山名豊国", power: 52, intel: 70, soldiers: 800 },
    { id: 39, name: "南条宗勝", power: 60, intel: 60, soldiers: 800 },
    { id: 40, name: "尼子義久", power: 60, intel: 65, soldiers: 850 },
    { id: 41, name: "毛利元就", power: 85, intel: 99, soldiers: 1200 },
    { id: 42, name: "宇喜多直家", power: 74, intel: 97, soldiers: 900 },
    { id: 43, name: "三村家親", power: 65, intel: 60, soldiers: 800 },
    { id: 44, name: "毛利隆元", power: 70, intel: 75, soldiers: 900 },
    { id: 45, name: "大内義長", power: 50, intel: 60, soldiers: 800 },
    { id: 46, name: "三好義賢", power: 75, intel: 85, soldiers: 950 },
    { id: 47, name: "十河一存", power: 85, intel: 60, soldiers: 850 },
    { id: 48, name: "河野通宣", power: 48, intel: 65, soldiers: 700 },
    { id: 49, name: "長宗我部元親", power: 92, intel: 88, soldiers: 1100 },
    { id: 50, name: "大友宗麟", power: 82, intel: 90, soldiers: 1100 }
];

const PROVINCE_NAMES = [
    "蝦夷", "陸奥", "陸中", "陸前", "羽後", "羽前", "越後", "下野", "上野", "常陸",
    "下総", "上総", "安房", "武蔵", "相模", "甲斐", "信濃", "駿河", "遠江", "三河",
    "尾張", "美濃", "飛騨", "越中", "能登", "伊勢", "志摩", "近江", "山城", "大和",
    "紀伊", "和泉", "摂津", "丹波", "丹後", "但馬", "播磨", "因幡", "伯耆", "出雲",
    "石見", "備前", "備中", "安芸", "周防", "阿波", "讃岐", "伊予", "土佐", "筑前"
];

// Rough mapping of Japanese provinces to a grid that looks like Japan
const JAPAN_COORDINATES = [
    // Spread across 4000px x 2000px (4 Screens wide version)
    // Tohoku (East)
    { x: 3660, y: 200 }, { x: 3460, y: 360 }, { x: 3660, y: 530 }, { x: 3800, y: 730 }, { x: 3330, y: 660 },
    { x: 3530, y: 900 }, { x: 3330, y: 1130 }, { x: 3660, y: 1330 }, { x: 3460, y: 1460 }, { x: 3060, y: 560 },
    // Kanto/Central (East-Center)
    { x: 3260, y: 1660 }, { x: 3130, y: 1400 }, { x: 3330, y: 1830 }, { x: 2930, y: 1730 }, { x: 2730, y: 1330 },
    { x: 2530, y: 560 }, { x: 2460, y: 760 }, { x: 2530, y: 960 }, { x: 2730, y: 1130 }, { x: 2600, y: 1560 },
    // Chubu/Tokai (Middle)
    { x: 2330, y: 660 }, { x: 2260, y: 900 }, { x: 2330, y: 1130 }, { x: 2460, y: 1400 }, { x: 2200, y: 1330 },
    { x: 2240, y: 1560 }, { x: 2060, y: 1100 }, { x: 2100, y: 1230 }, { x: 1860, y: 760 }, { x: 1930, y: 900 },
    // Kinki/Chugoku (West-Center)
    { x: 1860, y: 1130 }, { x: 1930, y: 1400 }, { x: 1800, y: 1330 }, { x: 1840, y: 1660 }, { x: 1660, y: 900 },
    { x: 1530, y: 1230 }, { x: 1330, y: 830 }, { x: 1400, y: 1100 }, { x: 1200, y: 1100 }, { x: 1260, y: 1460 },
    // Shikoku/Kyushu (West)
    { x: 1330, y: 1600 }, { x: 1130, y: 1330 }, { x: 1200, y: 1660 }, { x: 1060, y: 1830 }, { x: 860, y: 830 },
    { x: 530, y: 1000 }, { x: 660, y: 1230 }, { x: 400, y: 1400 }, { x: 530, y: 1560 }, { x: 260, y: 1560 }
];

function createTerritories() {
    const territories = [];
    for (let i = 0; i < 50; i++) {
        const coords = JAPAN_COORDINATES[i];
        const general = INITIAL_GENERALS[i];
        territories.push({
            id: i,
            name: PROVINCE_NAMES[i],
            ownerId: general.id,
            soldiers: general.soldiers,
            rice: 1000 + Math.floor(Math.random() * 1000),
            gold: 1000 + Math.floor(Math.random() * 1000),
            gridX: coords.x,
            gridY: coords.y,
            development: 20 + Math.floor(Math.random() * 30), // 開墾
            floodControl: 20 + Math.floor(Math.random() * 30), // 治水
            commerce: 20 + Math.floor(Math.random() * 30),    // 商業
            loyalty: 40 + Math.floor(Math.random() * 40),     // 民心 (忠誠)
            training: 20 + Math.floor(Math.random() * 40),    // 訓練
            armament: 10 + Math.floor(Math.random() * 30)     // 武装
        });
    }
    return territories;
}

// renderer.js content
class AssetManager {
    constructor(ctx) {
        this.ctx = ctx;
    }
    drawTerritory(x, y, width, height, ownerId, isSelected, playerOwnedId) {
        const ctx = this.ctx;
        ctx.fillStyle = "#2d5a27";
        ctx.fillRect(x, y, width, height);
        ctx.strokeStyle = isSelected ? "#fff" : "#444";
        ctx.lineWidth = isSelected ? 3 : 1;
        ctx.strokeRect(x, y, width, height);
        if (ownerId !== null) {
            ctx.fillStyle = "#8b4513";
            ctx.fillRect(x + width/4, y + height/4, width/2, height/2);
            ctx.fillStyle = ownerId === playerOwnedId ? "#3498db" : "#e74c3c";
            ctx.fillRect(x + width/3, y + height/3, width/3, width/3);
        }
    }
    drawBattleUnit(side, x, y, size, hp, maxHp, unitName, isSelected) {
        const ctx = this.ctx;
        // Unit Icon
        ctx.fillStyle = side === 'left' ? "#3498db" : "#e74c3c";
        ctx.fillRect(x, y, size, size);
        ctx.strokeStyle = isSelected ? "#ffd700" : "#fff";
        ctx.lineWidth = isSelected ? 4 : 2;
        ctx.strokeRect(x, y, size, size);
        
        if (isSelected) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#ffd700";
            ctx.strokeRect(x, y, size, size);
            ctx.shadowBlur = 0;
        }
        
        const barWidth = 200;
        const barHeight = 8;
        // Flip: Player (left side) has icon on right, bar on left. Enemy (right side) has icon on left, bar on right.
        const offsetX = side === 'left' ? -(barWidth + 15) : size + 15;
        const textX = side === 'left' ? x - 15 : x + size + 15;
        
        // 1. Text: Unit Name
        ctx.fillStyle = "#fff";
        ctx.font = "bold 14px Arial";
        ctx.textAlign = side === 'left' ? "right" : "left";
        ctx.fillText(`${unitName}`, textX, y + 16);
        
        // 2. Text: Soldier Count
        ctx.font = "12px Arial";
        ctx.fillStyle = "#ccc";
        ctx.fillText(`兵数: ${hp}`, textX, y + 32);

        // 3. HP Bar Background
        const barY = y + 42;
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(x + offsetX, barY, barWidth, barHeight);
        
        // HP Bar Fill
        const hpRatio = hp / maxHp;
        ctx.fillStyle = hpRatio > 0.5 ? "#2ecc71" : (hpRatio > 0.2 ? "#f1c40f" : "#e74c3c");
        const currentHpWidth = Math.max(0, Math.min(1, hpRatio) * barWidth);
        
        if (side === 'left') {
            // Player bar is on the left of the icon, so anchor the fill to the right side
            const endX = x + offsetX + barWidth;
            ctx.fillRect(endX - currentHpWidth, barY, currentHpWidth, barHeight);
        } else {
            // Enemy bar is on the right of the icon, anchor the fill to the left side
            ctx.fillRect(x + offsetX, barY, currentHpWidth, barHeight);
        }
        
        // Bar Border
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 1;
        ctx.strokeRect(x + offsetX, barY, barWidth, barHeight);
    }

    drawJapanOutline() {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 15;
        ctx.lineJoin = "round";

        // Hokkaido (4000x2000)
        ctx.moveTo(3930, 130);
        ctx.lineTo(3200, 160);
        ctx.lineTo(3060, 660);
        ctx.lineTo(3460, 910);
        ctx.lineTo(3930, 830);
        ctx.closePath();

        // Honshu
        ctx.moveTo(3460, 660); 
        ctx.lineTo(3200, 1000);
        ctx.lineTo(3330, 1580);
        ctx.lineTo(3060, 1910); 
        ctx.lineTo(2000, 1750); 
        ctx.lineTo(1330, 1500); 
        ctx.lineTo(800, 1410); 
        ctx.lineTo(260, 1330);  
        ctx.lineTo(260, 1000);  
        ctx.lineTo(1060, 1000); 
        ctx.lineTo(1860, 830); 
        ctx.lineTo(2660, 660); 
        ctx.closePath();

        // Shikoku
        ctx.moveTo(1860, 1580);
        ctx.lineTo(1060, 1580);
        ctx.lineTo(1000, 1910);
        ctx.lineTo(1800, 1910);
        ctx.closePath();

        // Kyushu
        ctx.moveTo(660, 1250);
        ctx.lineTo(200, 1330);
        ctx.lineTo(200, 1910);
        ctx.lineTo(660, 1910);
        ctx.closePath();

        ctx.stroke();
        
        // Secondary subtle fill
        ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
        ctx.fill();
    }
}

// battle.js content
class Battle {
    constructor(ctx, renderer, player, enemy, battleType, onComplete) {
        this.ctx = ctx;
        this.renderer = renderer;
        this.player = player;
        this.enemy = enemy;
        this.battleType = battleType || 'offense';
        this.onComplete = onComplete;
        
        this.playerMp = Math.floor(player.intel / 2);
        this.playerMaxMp = this.playerMp;
        this.enemyMp = Math.floor(enemy.intel / 2);
        this.enemyMaxMp = this.enemyMp;

        // Split soldiers into 5 units (Ratio: 3:2:2:2:1) - Use actual names for generals
        const playerGenName = player.name.includes("(") ? player.name.match(/\((.*)\)/)[1] : player.name;
        const enemyGenName = enemy.name.includes("(") ? enemy.name.match(/\((.*)\)/)[1] : enemy.name;
        this.playerUnits = this.createUnits(player.soldiers, playerGenName);
        this.enemyUnits = this.createUnits(enemy.soldiers, enemyGenName);
        
        this.turn = 'player';
        this.isAnimating = false;
        this.showingTactics = false;
        this.shake = 0;
        this.battleLog = `${player.name} と ${enemy.name} の戦いが始まった！`;
        this.commands = [
            { id: 'attack', label: '攻撃', x: 370, y: 620, w: 120, h: 50 },
            { id: 'all_attack', label: '総攻撃', x: 510, y: 620, w: 120, h: 50 },
            { id: 'tactic_menu', label: '計略', x: 650, y: 620, w: 120, h: 50 },
            { id: 'retreat', label: '退却', x: 790, y: 620, w: 120, h: 50 }
        ];
        this.tacticOptions = [
            { id: 'fire', label: '火計 (5MP)', cost: 5, x: 370, y: 620, w: 120, h: 50 },
            { id: 'water', label: '水計 (8MP)', cost: 8, x: 510, y: 620, w: 120, h: 50 },
            { id: 'heal', label: '援軍 (10MP)', cost: 10, x: 650, y: 620, w: 120, h: 50 },
            { id: 'back', label: '戻る', cost: 0, x: 790, y: 620, w: 120, h: 50 }
        ];
        this.hoveredCommandId = null;
        
        // Sequential Turn System
        this.battleState = 'input'; // 'input', 'execute', 'end'
        this.currentActorIndex = 0;
        this.unitActions = []; // { actorIndex, type, targetIndex, tacticId }
        this.actionQueue = [];
        this.isExecuting = false;
        this.attackerLunge = 0;
        this.damageText = null; // { value, side, index, timer }
        this.isAutoBattle = false; // 総攻撃用オートフラグ
    }

    createUnits(total, generalName) {
        const ratios = [0.3, 0.2, 0.2, 0.2, 0.1];
        const names = [generalName, "騎馬隊", "鉄砲隊", "槍隊", "足軽隊"];
        return names.map((name, i) => {
            const hp = Math.floor(total * ratios[i]);
            return { name, hp, maxHp: hp };
        });
    }

    getTotalHp(units) {
        return units.reduce((sum, u) => sum + Math.max(0, u.hp), 0);
    }

    getTotalMaxHp(units) {
        return units.reduce((sum, u) => sum + u.maxHp, 0);
    }
    handleMouseMove(x, y) {
        if (this.isAutoBattle && this.battleState === 'execute') {
            const btn = { id: 'cancel_auto', x: 580, y: 620, w: 120, h: 50 };
            const found = (x >= btn.x - 5 && x <= btn.x + btn.w + 5 && y >= btn.y - 5 && y <= btn.y + btn.h + 5) ? btn : null;
            this.hoveredCommandId = found ? found.id : null;
            return;
        }
        
        if (this.isAnimating || this.turn !== 'player') {
            this.hoveredCommandId = null;
            return;
        }
        const options = this.showingTactics ? this.tacticOptions : this.commands;
        const found = options.find(c => x >= c.x - 5 && x <= c.x + c.w + 5 && y >= c.y - 5 && y <= c.y + c.h + 5);
        this.hoveredCommandId = found ? found.id : null;
    }
    handleClick(x, y) {
        // Handle Auto-Battle Cancel Button (even during animation)
        if (this.isAutoBattle && this.battleState === 'execute') {
            const btn = { id: 'cancel_auto', x: 580, y: 620, w: 120, h: 50 };
            if (x >= btn.x - 5 && x <= btn.x + btn.w + 5 && y >= btn.y - 5 && y <= btn.y + btn.h + 5) {
                this.isAutoBattle = false;
                this.battleLog = "総攻撃を解除しました！次ターンから手動に戻ります。";
                return;
            }
        }

        if (this.isAnimating || this.turn !== 'player') return;

        // Click player unit to rewind selection
        if (this.battleState === 'input' || this.battleState === 'targeting') {
            const playerSide = this.battleType === 'defense' ? 'right' : 'left';
            for (let i = 0; i < 5; i++) {
                if (this.playerUnits[i].hp <= 0) continue;
                // Only allow rewinding to ALREADY completed units or currently selected unit
                if (i <= this.currentActorIndex) {
                    const baseY = 140 + i * 75;
                    const pHitX = playerSide === 'left' ? (x >= 280 && x <= 550) : (x >= 700 && x <= 950);
                    if (y >= baseY && y <= baseY + 60 && pHitX) {
                        this.unitActions = this.unitActions.slice(0, i);
                        this.currentActorIndex = i;
                        this.battleState = 'input';
                        this.pendingAction = null;
                        this.showingTactics = false;
                        this.battleLog = `${this.playerUnits[this.currentActorIndex].name} を再選択します。`;
                        return;
                    }
                }
            }
        }

        if (this.battleState === 'targeting') {
            const enemySide = this.battleType === 'defense' ? 'left' : 'right';
            // Check if clicked exactly on an enemy unit row
            for (let i = 0; i < 5; i++) {
                if (this.enemyUnits[i].hp <= 0) continue;
                const baseY = 140 + i * 75;
                const hitX = enemySide === 'left' ? (x >= 280 && x <= 550) : (x >= 700 && x <= 950);
                if (y >= baseY && y <= baseY + 60 && hitX) {
                    // Target selected!
                    this.pendingAction.targetIndex = i;
                    this.unitActions.push(this.pendingAction);
                    this.pendingAction = null;
                    this.battleState = 'input';
                    this.nextActor();
                    return;
                }
            }
            // If clicked elsewhere, maybe cancel targeting?
            const cancelBtn = { x: 790, y: 620, w: 120, h: 50 };
            if (x >= cancelBtn.x - 5 && x <= cancelBtn.x + cancelBtn.w + 5 && y >= cancelBtn.y - 5 && y <= cancelBtn.y + cancelBtn.h + 5) {
                this.battleState = 'input'; // Cancel
                this.pendingAction = null;
            }
            return;
        }

        const options = this.showingTactics ? this.tacticOptions : this.commands;
        const button = options.find(c => x >= c.x - 5 && x <= c.x + c.w + 5 && y >= c.y - 5 && y <= c.y + c.h + 5);
        
        if (button) {
            if (this.showingTactics) {
                if (button.id === 'back') this.showingTactics = false;
                else this.handleTactic(button);
            } else {
                this.handleBaseCommand(button.id);
            }
        }
    }

    handleBaseCommand(commandId) {
        if (commandId === 'retreat') {
            this.battleLog = "退却しました！";
            this.isAnimating = false;
            setTimeout(() => this.onComplete('retreat'), 1000);
            return;
        }
        if (commandId === 'attack') {
            this.battleState = 'targeting';
            this.pendingAction = { type: 'attack', actorIndex: this.currentActorIndex };
            this.battleLog = "攻撃する敵部隊をクリック（タップ）してください。";
        } else if (commandId === 'all_attack') {
            this.isAutoBattle = true;
            while (this.currentActorIndex < 5) {
                if (this.playerUnits[this.currentActorIndex].hp > 0) {
                    this.unitActions.push({ 
                        type: 'attack', 
                        actorIndex: this.currentActorIndex 
                    });
                }
                this.currentActorIndex++;
            }
            this.startExecution();
        } else if (commandId === 'tactic_menu') {
            this.showingTactics = true;
        }
    }
    handleTactic(tactic) {
        if (this.playerMp < tactic.cost) {
            this.battleLog = "MPが足りません！";
            return;
        }

        if (tactic.id === 'heal') {
            this.unitActions.push({ 
                type: 'tactic', 
                actorIndex: this.currentActorIndex, 
                tacticId: tactic.id,
                tacticLabel: tactic.label,
                cost: tactic.cost 
            });
            this.nextActor();
        } else {
            this.battleState = 'targeting';
            this.pendingAction = { 
                type: 'tactic', 
                actorIndex: this.currentActorIndex, 
                tacticId: tactic.id,
                tacticLabel: tactic.label,
                cost: tactic.cost 
            };
            this.battleLog = `${tactic.label} を仕掛ける敵部隊を選択してください。`;
            this.showingTactics = false;
        }
    }

    nextActor() {
        this.currentActorIndex++;
        if (this.currentActorIndex >= 5) {
            this.startExecution();
        } else {
            // Find next alive unit
            while (this.currentActorIndex < 5 && this.playerUnits[this.currentActorIndex].hp <= 0) {
                this.currentActorIndex++;
            }
            if (this.currentActorIndex >= 5) this.startExecution();
            else this.battleLog = `${this.playerUnits[this.currentActorIndex].name} の行動を選択してください。`;
        }
    }

    startExecution() {
        this.battleState = 'execute';
        this.battleLog = "全軍進撃！";
        
        // Player actions
        this.actionQueue = this.unitActions.map(a => ({ ...a, side: 'player' }));
        
        // Enemy actions (Randomly decide for each alive unit)
        this.enemyUnits.forEach((u, i) => {
            if (u.hp <= 0) return;
            const rand = Math.random();
            if (rand < 0.2 && this.enemyMp >= 5) {
                this.actionQueue.push({ side: 'enemy', type: 'tactic', actorIndex: i, tacticId: 'fire', cost: 5, tacticLabel: '火計' });
                this.enemyMp -= 5;
            } else {
                this.actionQueue.push({ side: 'enemy', type: 'attack', actorIndex: i });
            }
        });

        // Shuffle queue slightly or just run in order (Player then Enemy for now for clarity)
        this.executeNextAction();
    }

    async executeNextAction() {
        if (this.actionQueue.length === 0) {
            this.finishTurn();
            return;
        }

        const action = this.actionQueue.shift();
        const attackerUnits = action.side === 'player' ? this.playerUnits : this.enemyUnits;
        const targetUnits = action.side === 'player' ? this.enemyUnits : this.playerUnits;
        const attackerObj = action.side === 'player' ? this.player : this.enemy;
        const targetObj = action.side === 'player' ? this.enemy : this.player;

        // Skip if actor died in the meantime
        if (attackerUnits[action.actorIndex].hp <= 0) {
            this.executeNextAction();
            return;
        }

        this.isAnimating = true;
        this.currentActorSide = action.side;
        this.currentActorIdx = action.actorIndex;
        this.attackerLunge = 60; // Direction is resolved dynamically in update()
        this.damageText = null;

        if (action.type === 'attack') {
            const aliveTargets = targetUnits.map((u, i) => ({...u, i})).filter(u => u.hp > 0);
            if (aliveTargets.length === 0) {
                this.executeNextAction();
                return;
            }

            let target;
            if (action.targetIndex !== undefined && targetUnits[action.targetIndex].hp > 0) {
                target = { ...targetUnits[action.targetIndex], i: action.targetIndex };
            } else {
                target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)];
            }
            
            
            // Unit strength multiplier (General > Cavalry > Matchlock > Spearman > Ashigaru)
            const unitMultipliers = [1.5, 1.2, 1.1, 0.9, 0.7];
            const unitFactor = unitMultipliers[action.actorIndex];

            // Famicom-style damage: HP * Power * (Training + Armament) factor
            const trainingFactor = (attackerObj.training || 50) / 100;
            const armamentFactor = 1 + (attackerObj.armament || 20) / 100;
            
            let damage = Math.floor((attackerUnits[action.actorIndex].hp * (attackerObj.power / 100) * trainingFactor * armamentFactor * unitFactor * (0.8 + Math.random() * 0.4)) / 4.5);
            damage = Math.max(5, damage);
            
            const targetSide = action.side === 'player' ? 'right' : 'left';
            this.battleLog = `${attackerUnits[action.actorIndex].name} の攻撃！ ${targetUnits[target.i].name} に ${damage} のダメージ！`;
            this.shake = 15;
            
            setTimeout(() => {
                targetUnits[target.i].hp = Math.max(0, targetUnits[target.i].hp - damage);
                this.shake = 15;
                this.attackerLunge = 0; // 戻る
                this.damageText = { value: damage, side: targetSide, index: target.i, timer: 60 };
                
                if (this.checkBattleEndInstant()) {
                    this.actionQueue = []; // Clear queue on end
                    return;
                }
                setTimeout(() => this.executeNextAction(), 400);
            }, 500);

        } else if (action.type === 'tactic') {
            if (action.side === 'player') this.playerMp -= (action.cost || 0);
            
            if (action.tacticId === 'heal') {
                const heal = Math.floor(attackerObj.intel * 0.6 + Math.random() * 10); // バランス調整済
                this.battleLog = `${attackerUnits[action.actorIndex].name} の援軍！全部隊が ${heal} 回復！`;
                attackerUnits.forEach(u => { if (u.hp > 0) u.hp = Math.min(u.maxHp, u.hp + heal); });
            } else {
                const multiplier = action.tacticId === 'fire' ? 1.0 : 1.5;
                const damage = Math.floor((attackerObj.intel * 0.6) * multiplier + Math.random() * 15); // バランス調整済
                const aliveTargets = targetUnits.map((u, i) => ({...u, i})).filter(u => u.hp > 0);
                if (aliveTargets.length > 0) {
                    let target;
                    if (action.targetIndex !== undefined && targetUnits[action.targetIndex].hp > 0) {
                        target = { ...targetUnits[action.targetIndex], i: action.targetIndex };
                    } else {
                        target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)];
                    }
                    this.battleLog = `${attackerUnits[action.actorIndex].name} の ${action.tacticLabel}！ ${targetUnits[target.i].name} に ${damage} のダメージ！`;
                    targetUnits[target.i].hp = Math.max(0, targetUnits[target.i].hp - damage);
                    this.shake = 20;

                    const enemySide = this.battleType === 'defense' ? 'left' : 'right';
                    const targetSide = action.side === 'player' ? enemySide : (enemySide === 'left' ? 'right' : 'left');

                    this.battleLog = `${attackerUnits[action.actorIndex].name} の ${action.tacticLabel}！`;
                    this.tacticAnim = { type: action.tacticId, side: targetSide, index: target.i, timer: 60 };

                    setTimeout(() => {
                        targetUnits[target.i].hp = Math.max(0, targetUnits[target.i].hp - damage);
                        this.shake = 20;
                        this.damageText = { value: damage, side: targetSide, index: target.i, timer: 60 };
                        this.battleLog = `${targetUnits[target.i].name} に ${damage} のダメージ！`;
                        
                        setTimeout(() => {
                            this.shake = 0;
                            this.attackerLunge = 0; // 戻る
                            if (this.checkBattleEndInstant()) {
                                this.actionQueue = [];
                                return;
                            }
                            setTimeout(() => this.executeNextAction(), 400);
                        }, 800);
                        
                    }, 1000); // 1秒間火柱・津波エフェクトを見せる
                    return; // Early return because nested timeouts handle the rest
                }
            }
            // Fallback for heal or if no target found
            setTimeout(() => {
                this.shake = 0;
                this.attackerLunge = 0; // 戻る
                if (this.checkBattleEndInstant()) {
                    this.actionQueue = [];
                    return;
                }
                setTimeout(() => this.executeNextAction(), 600);
            }, 500);
        }
    }

    checkBattleEndInstant() {
        const playerHp = this.getTotalHp(this.playerUnits);
        const enemyHp = this.getTotalHp(this.enemyUnits);

        if (playerHp <= 0) {
            this.battleLog = "全軍壊滅... 敗北です。";
            this.isAnimating = false;
            setTimeout(() => this.onComplete('lose'), 1000);
            return true;
        }
        if (enemyHp <= 0) {
            this.battleLog = "敵を全滅させた！ 勝利です！";
            this.isAnimating = false;
            setTimeout(() => this.onComplete('win'), 1000);
            return true;
        }
        return false;
    }

    finishTurn() {
        if (this.checkBattleEndInstant()) return;

        if (this.isAutoBattle) {
            this.unitActions = [];
            this.currentActorIndex = 0;
            while (this.currentActorIndex < 5) {
                if (this.playerUnits[this.currentActorIndex].hp > 0) {
                    this.unitActions.push({ 
                        type: 'attack', 
                        actorIndex: this.currentActorIndex 
                    });
                }
                this.currentActorIndex++;
            }
            this.startExecution();
            return;
        }

        this.battleState = 'input';
        this.currentActorIndex = 0;
        this.unitActions = [];
        this.isAnimating = false;
        // Skip dead units for input
        while (this.currentActorIndex < 5 && this.playerUnits[this.currentActorIndex].hp <= 0) {
            this.currentActorIndex++;
        }
        
        if (this.currentActorIndex >= 5) this.startExecution();
        else this.battleLog = `${this.playerUnits[this.currentActorIndex].name} の行動を選択してください。`;

        // Display action queue for player feedback
        if (this.battleState === 'input' && this.unitActions.length > 0) {
            let msg = "登録済: ";
            msg += this.unitActions.map(a => `${this.playerUnits[a.actorIndex].name}(${a.type})`).join(' ');
            if (msg !== this.battleLog) {
                // this.battleLog = msg;
            }
        }
    }


    update() {
        const ctx = this.ctx;
        ctx.fillStyle = "#1e1e1e";
        ctx.fillRect(0, 0, 1280, 720);
        
        const shakeX = this.shake > 0 ? (Math.random()-0.5)*this.shake : 0;
        if (this.shake > 0) this.shake *= 0.8;
        if (this.shake < 0.1) this.shake = 0;
        
        const playerSide = this.battleType === 'defense' ? 'right' : 'left';
        const enemySide = this.battleType === 'defense' ? 'left' : 'right';
        const playerBaseX = playerSide === 'left' ? 500 : 730;
        const enemyBaseX = enemySide === 'left' ? 500 : 730;

        // Draw 5 units for each side
        this.playerUnits.forEach((u, i) => {
            const isActing = (this.isAnimating && this.currentActorSide === 'player' && this.currentActorIdx === i);
            const isSelecting = (this.battleState === 'input' && this.currentActorIndex === i);
            const lungeDir = playerSide === 'left' ? this.attackerLunge : -this.attackerLunge;
            const selectOffset = playerSide === 'left' ? 10 : -10;
            
            const x = playerBaseX + (this.turn === 'enemy' ? shakeX : 0) + (isActing ? lungeDir : (isSelecting ? selectOffset : 0));
            const y = 140 + i * 75;
            this.renderer.drawBattleUnit(playerSide, x, y, 50, u.hp, u.maxHp, u.name, isSelecting || isActing);
        });

        this.enemyUnits.forEach((u, i) => {
            const isActing = (this.isAnimating && this.currentActorSide === 'enemy' && this.currentActorIdx === i);
            const isTargetable = (this.battleState === 'targeting' && u.hp > 0);
            const lungeDir = enemySide === 'left' ? this.attackerLunge : -this.attackerLunge;
            const x = enemyBaseX + (this.turn === 'player' ? shakeX : 0) + (isActing ? lungeDir : 0);
            const y = 140 + i * 75;
            this.renderer.drawBattleUnit(enemySide, x, y, 50, u.hp, u.maxHp, u.name, isActing || isTargetable);

            if (isTargetable) {
                // Draw pointing indicator
                const ctx = this.ctx;
                ctx.save();
                ctx.font = "28px Arial";
                const pulse = Math.sin(Date.now() / 150) * 8;
                if (enemySide === 'left') {
                    ctx.textAlign = "left";
                    ctx.fillText("👈", x + 55 - pulse, y + 36);
                } else {
                    ctx.textAlign = "right";
                    ctx.fillText("👉", x - 15 + pulse, y + 36);
                }
                ctx.restore();
            }
        });

        // Draw Floating Damage Numbers
        if (this.damageText && this.damageText.timer > 0) {
            const dt = this.damageText;
            const baseX = (dt.side === 'left' ? 500 : 730) + 25; // Center of unit box
            const baseY = (140 + dt.index * 75) + 30; // Start inside unit box
            
            // Pop up and fade out animation
            const offset = (60 - dt.timer) * 0.8;
            const alpha = Math.min(1, dt.timer / 30);
            
            this.ctx.save();
            this.ctx.font = "bold 34px 'Outfit'";
            this.ctx.fillStyle = `rgba(255, 50, 50, ${alpha})`;
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            this.ctx.lineWidth = 4;
            this.ctx.textAlign = "center";
            this.ctx.strokeText(`-${dt.value}`, baseX, baseY - offset);
            this.ctx.fillText(`-${dt.value}`, baseX, baseY - offset);
            this.ctx.restore();
            
            dt.timer--;
        }

        // MP Bar and Labels (Moved to above the generals)
        const barY = 110;
        const barH = 6;
        const barW = 120;
        
        // Player MP Above General
        const playerBarX = playerSide === 'left' ? 430 : 730;
        ctx.fillStyle = "#444";
        ctx.fillRect(playerBarX, barY, barW, barH);
        ctx.fillStyle = "#3498db";
        ctx.fillRect(playerBarX, barY, (this.playerMp / (this.playerMaxMp || 1)) * barW, barH);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.strokeRect(playerBarX, barY, barW, barH);
        
        ctx.fillStyle = "#fff";
        ctx.font = "bold 13px Arial";
        ctx.textAlign = playerSide === 'left' ? "right" : "left";
        const playerTextX = playerSide === 'left' ? playerBarX + barW : playerBarX;
        ctx.fillText(`MP: ${this.playerMp}`, playerTextX, barY - 5);

        // Enemy MP Above General
        const enemyBarX = enemySide === 'left' ? 430 : 730; 
        ctx.fillStyle = "#444";
        ctx.fillRect(enemyBarX, barY, barW, barH);
        ctx.fillStyle = "#e74c3c";
        ctx.fillRect(enemyBarX, barY, (this.enemyMp / (this.enemyMaxMp || 1)) * barW, barH);
        ctx.strokeStyle = "#fff";
        ctx.strokeRect(enemyBarX, barY, barW, barH);

        ctx.textAlign = enemySide === 'left' ? "right" : "left";
        const enemyTextX = enemySide === 'left' ? enemyBarX + barW : enemyBarX;
        ctx.fillText(`敵軍 MP: ${this.enemyMp}`, enemyTextX, barY - 5);

        // General Portrait Frames
        const portW = 120;
        const portH = 120;
        const leftX = 40;
        const rightX = 1120;
        const portY = 30;

        const pFrameX = playerSide === 'left' ? leftX : rightX;
        const pAlign = playerSide === 'left' ? "left" : "right";
        const pTextX = playerSide === 'left' ? leftX + portW + 20 : rightX - 20;

        const eFrameX = enemySide === 'left' ? leftX : rightX;
        const eAlign = enemySide === 'left' ? "left" : "right";
        const eTextX = enemySide === 'left' ? leftX + portW + 20 : rightX - 20;

        // Player Portrait Frame & Info
        ctx.fillStyle = "#222";
        ctx.fillRect(pFrameX, portY, portW, portH);
        ctx.strokeStyle = "#3498db";
        ctx.lineWidth = 3;
        ctx.strokeRect(pFrameX, portY, portW, portH);
        ctx.fillStyle = "#aaa";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText("自軍大将", pFrameX + portW/2, portY + portH/2 + 5);
        
        ctx.fillStyle = "#fff";
        ctx.font = "bold 22px Arial";
        ctx.textAlign = pAlign;
        const pTotal = this.getTotalHp(this.playerUnits);
        ctx.fillText(`自軍 総兵士数: ${pTotal}`, pTextX, portY + 45);

        // Enemy Portrait Frame & Info
        ctx.fillStyle = "#222";
        ctx.fillRect(eFrameX, portY, portW, portH);
        ctx.strokeStyle = "#e74c3c";
        ctx.lineWidth = 3;
        ctx.strokeRect(eFrameX, portY, portW, portH);
        ctx.fillStyle = "#aaa";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText("敵軍大将", eFrameX + portW/2, portY + portH/2 + 5);

        ctx.fillStyle = "#fff";
        ctx.font = "bold 22px Arial";
        ctx.textAlign = eAlign;
        const eTotal = this.getTotalHp(this.enemyUnits);
        ctx.fillText(`敵軍 総兵士数: ${eTotal}`, eTextX, portY + 45);

        // Tactic Animation (Fire Pillar / Tsunami) on target unit
        if (this.tacticAnim && this.tacticAnim.timer > 0) {
            const ta = this.tacticAnim;
            
            // Draw relative to the target unit instead of the general
            const targetX = (ta.side === 'left' ? 500 : 730);
            const targetY = 140 + ta.index * 75;
            const unitW = 50;
            const unitH = 50;

            // Expand drawing area slightly for drama
            const effectX = targetX - 25;
            const effectY = targetY - 50;
            const effectW = 100;
            const effectH = 100;
            
            ctx.save();
            ctx.beginPath();
            ctx.rect(effectX, effectY, effectW, effectH);
            ctx.clip(); // Restrict effect inside the extended unit frame
            
            const alpha = Math.min(1, ta.timer / 20);
            const progress = (60 - ta.timer);

            if (ta.type === 'fire') {
                const flameH = progress * 3; // Fire rises up
                ctx.fillStyle = `rgba(255, 69, 0, ${alpha * 0.9})`;
                ctx.fillRect(effectX, effectY + effectH - flameH, effectW, flameH);
                
                ctx.fillStyle = `rgba(255, 215, 0, ${alpha * 0.7})`;
                ctx.fillRect(effectX + 15, effectY + effectH - flameH * 1.5, effectW - 30, flameH);
                
                // Fire zigzags
                ctx.strokeStyle = `rgba(255, 140, 0, ${alpha})`;
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(effectX + 10, effectY + effectH);
                ctx.lineTo(effectX + 30, effectY + effectH - flameH * 1.2);
                ctx.lineTo(effectX + 50, effectY + effectH - flameH * 0.8);
                ctx.lineTo(effectX + 70, effectY + effectH - flameH * 1.4);
                ctx.lineTo(effectX + 90, effectY + effectH);
                ctx.stroke();

            } else if (ta.type === 'water') {
                // Tsunami effect (Wave crashing)
                const waveX = progress * 2.5; // Water surges 
                const waveY = effectY + effectH - 20 - progress * 1.2 + Math.sin(ta.timer * 0.5) * 10;
                
                ctx.fillStyle = `rgba(30, 144, 255, ${alpha * 0.9})`;
                ctx.beginPath();
                ctx.moveTo(effectX, effectY + effectH);
                ctx.lineTo(effectX, waveY);
                // Draw crest
                ctx.quadraticCurveTo(effectX + waveX / 2, waveY - 20, effectX + waveX, waveY + 10);
                ctx.lineTo(effectX + effectW, effectY + effectH);
                ctx.fill();
                
                ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 0.6})`;
                ctx.beginPath();
                ctx.moveTo(effectX, effectY + effectH);
                ctx.lineTo(effectX, waveY + 10);
                ctx.quadraticCurveTo(effectX + waveX, waveY - 30, effectX + waveX * 1.5, waveY + 10);
                ctx.lineTo(effectX + effectW, effectY + effectH);
                ctx.fill();
            }
            
            ctx.restore();
            ta.timer--;
        }

        // Message Box (Moved to bottom before commands)
        ctx.fillStyle = "rgba(0,0,0,0.6)";
        ctx.fillRect(240, 540, 800, 60);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "center";
        let logToShow = this.battleLog;
        if (this.battleState === 'input' && this.playerUnits[this.currentActorIndex]) {
            logToShow = `${this.playerUnits[this.currentActorIndex].name} の行動を選択してください。 (部隊タップで戻れます)`;
        }
        ctx.fillText(logToShow, 640, 578);

        let optionsToDraw = [];
        if (this.isAutoBattle && this.battleState === 'execute') {
            optionsToDraw = [{ id: 'cancel_auto', label: 'オート解除', x: 580, y: 620, w: 120, h: 50 }];
        } else if (this.turn === 'player' && !this.isAnimating) {
            if (this.battleState === 'input') {
                optionsToDraw = this.showingTactics ? this.tacticOptions : this.commands;
            } else if (this.battleState === 'targeting') {
                optionsToDraw = [{ id: 'cancel', label: '戻る', x: 790, y: 620, w: 120, h: 50 }];
            }
        }

        optionsToDraw.forEach(c => {
                const isHovered = this.hoveredCommandId === c.id;
                
                // Shadow
                ctx.fillStyle = "rgba(0,0,0,0.5)";
                ctx.fillRect(c.x + 4, c.y + 4, c.w, c.h);

                // Button Body
                ctx.fillStyle = isHovered ? "#555" : "#333";
                ctx.fillRect(c.x, c.y, c.w, c.h);
                
                // Border
                ctx.strokeStyle = isHovered ? "#ffd700" : "#d4af37";
                ctx.lineWidth = isHovered ? 3 : 1;
                ctx.strokeRect(c.x, c.y, c.w, c.h);
                
                // Text
                ctx.fillStyle = isHovered ? "#ffd700" : "#fff";
                ctx.font = isHovered ? "bold 16px Arial" : "16px Arial";
                ctx.textAlign = "center";
                ctx.fillText(c.label, c.x + c.w/2, c.y + c.h/2 + 6);
                
                // Highlight corner
                if (isHovered) {
                    ctx.fillStyle = "#ffd700";
                    ctx.fillRect(c.x, c.y, 10, 2);
                    ctx.fillRect(c.x, c.y, 2, 10);
                }
            });
    }
}

// game.js content
class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error("Canvas not found!");
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.renderer = new AssetManager(this.ctx);
        
        this.battleCanvas = document.getElementById('battle-canvas');
        this.battleCtx = this.battleCanvas ? this.battleCanvas.getContext('2d') : null;
        
        this.minimapCanvas = document.getElementById('minimap-canvas');
        this.minimapCtx = this.minimapCanvas ? this.minimapCanvas.getContext('2d') : null;
        
        // Ensure data is available
        this.allGenerals = INITIAL_GENERALS;
        
        // State variables
        this.selectedGeneral = null;
        this.playerOwnedId = null; 
        
        this.setupTitleScreen();
        this.zoom = 1.0;
        
        // Adjust zoom based on OS / screen size after layout
        setTimeout(() => this.autoAdjustScreen(), 100);
        window.addEventListener('resize', () => this.autoAdjustScreen());
    }

    autoAdjustScreen() {
        const isMobile = window.innerWidth <= 896 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const app = document.getElementById('app');
        
        if (app) {
            const w = window.innerWidth;
            const h = window.innerHeight;
            
            app.style.position = 'fixed';
            app.style.top = '50%';
            app.style.left = '50%';
            app.style.margin = '-360px 0 0 -640px'; // Center unscaled (half of 720 / 1280)
            app.style.transformOrigin = 'center center';
            
            if (isMobile && w < h) {
                // Portrait mode: Scale down to fit the tightest bounds when rotated
                const scale = Math.min(w / 720, h / 1280);
                app.style.transform = `scale(${scale}) rotate(90deg)`;
            } else {
                // Landscape or Desktop: standard scale down if too small
                const scale = Math.min(1.0, w / 1280, h / 720);
                app.style.transform = `scale(${scale})`;
            }
        }

        const container = document.getElementById('map-world-container');
        if (!container) return;
        const rect = container.getBoundingClientRect();
        
        if (isMobile) {
            this.setZoom(0.4, 2000, 1000); // Zoom out to safe default 
        } else {
            this.setZoom(0.8, 2000, 1000); // Centered default
        }
    }

    setZoom(newZoom, centerX, centerY) {
        const container = document.getElementById('map-world-container');
        const viewport = document.getElementById('map-scroll-viewport');
        if (!container || !viewport) return;
        
        const oldZoom = this.zoom;
        this.zoom = Math.max(0.2, Math.min(3.0, newZoom));
        
        // Adjust scroll to keep the point under the cursor stable
        const rect = container.getBoundingClientRect();
        const relX = (centerX || (rect.width / 2)) + container.scrollLeft;
        const relY = (centerY || (rect.height / 2)) + container.scrollTop;
        
        const ratio = this.zoom / oldZoom;
        
        this.canvas.style.width = (4000 * this.zoom) + "px";
        this.canvas.style.height = (2000 * this.zoom) + "px";
        viewport.style.width = (4000 * this.zoom) + "px";
        viewport.style.height = (2000 * this.zoom) + "px";
        
        container.scrollLeft = relX * ratio - (centerX || (rect.width / 2));
        container.scrollTop = relY * ratio - (centerY || (rect.height / 2));
    }

    setupTitleScreen() {
        document.getElementById('btn-start').onclick = () => {
            // Try to force fullscreen and landscape if on mobile
            try {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen().catch(e => console.log("Fullscreen error:", e));
                }
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock('landscape').catch(e => console.log("Orientation error:", e));
                }
            } catch (e) {
                console.log("Fullscreen or orientation lock failed/unsupported.", e);
            }
            
            document.getElementById('title-screen').classList.add('hidden');
            this.showSelectScreen();
        };
    }

    showSelectScreen() {
        const selectScreen = document.getElementById('select-screen');
        selectScreen.classList.remove('hidden');
        
        const list = document.getElementById('general-list');
        list.innerHTML = '';
        
        // Show all 50 generals for selection
        this.allGenerals.forEach(g => {
            const card = document.createElement('div');
            card.className = 'general-card';
            card.style.pointerEvents = 'auto'; // Ensure it's clickable
            card.innerHTML = `
                <h3 style="pointer-events:none; font-size:16px;">${g.name}</h3>
                <p style="pointer-events:none;">武: ${g.power} | 知: ${g.intel}</p>
                <p style="pointer-events:none;">兵: ${g.soldiers}</p>
            `;
            card.onclick = (e) => {
                e.stopPropagation();
                document.querySelectorAll('.general-card').forEach(c => {
                    c.classList.remove('selected', 'active');
                    c.style.borderColor = "";
                    c.style.background = "";
                });
                card.classList.add('selected', 'active');
                card.style.borderColor = "#d4af37";
                card.style.background = "rgba(212, 175, 55, 0.2)";
                this.selectedGeneral = g;
            };
            list.appendChild(card);
        });

        document.getElementById('btn-confirm-select').onclick = () => {
            if (!this.selectedGeneral) {
                alert("武将を選択してください");
                return;
            }
            this.startGame();
        };
    }

    startGame() {
        document.getElementById('select-screen').classList.add('hidden');
        document.getElementById('map-world-container').classList.remove('hidden');
        document.getElementById('game-status').classList.remove('hidden');
        
        // Setup player ID
        this.playerOwnedId = this.selectedGeneral.id;
        
        // Setup game data
        this.territories = createTerritories();
        this.generals = [...INITIAL_GENERALS];

        this.selectedTerritory = null;
        this.attackingTerritory = null;
        this.targetTerritory = null;
        this.state = 'MAP';
        this.battle = null;
        this.year = 1560;
        this.month = 0; 

        this.turnQueue = [];
        this.currentTurnIdx = -1;
        this.actingTerritory = null;

        this.setupCanvas();
        this.bindEvents();
        
        // Initial scroll centering
        const playerTerritory = this.territories.find(t => t.ownerId === this.playerOwnedId);
        if (playerTerritory) {
            this.playerHonkokuId = playerTerritory.id; // Assign honkoku
            const container = document.getElementById('map-world-container');
            container.scrollLeft = playerTerritory.gridX - container.clientWidth / 2 + 80;
            container.scrollTop = playerTerritory.gridY - container.clientHeight / 2 + 80;
        }

        console.log("Game started with:", this.selectedGeneral.name);
        this.startNextMonth();
        this.update();
    }

    setupCanvas() {
        this.canvas.width = 4000;
        this.canvas.height = 2000;
        this.canvas.style.backgroundColor = '#111';
        this.mapZoom = 0.28; // Default to smallest size showing full map
        this.applyMapZoom();
    }

    applyMapZoom() {
        const viewport = document.getElementById('map-scroll-viewport');
        if (viewport) {
            viewport.style.width = (4000 * this.mapZoom) + "px";
            viewport.style.height = (2000 * this.mapZoom) + "px";
        }
        this.canvas.style.width = (4000 * this.mapZoom) + "px";
        this.canvas.style.height = (2000 * this.mapZoom) + "px";
    }

    bindEvents() {
        const container = document.getElementById('map-world-container');
        let isDragging = false;
        let startX, startY, scrollL, scrollT;
        let hasMoved = false;

        const onDown = (px, py) => {
            isDragging = true;
            hasMoved = false;
            startX = px;
            startY = py;
            scrollL = container.scrollLeft;
            scrollT = container.scrollTop;
        };

        const onMove = (px, py) => {
            if (!isDragging) return;
            const dx = px - startX;
            const dy = py - startY;
            if (Math.abs(dx) > 10 || Math.abs(dy) > 10) hasMoved = true;
            container.scrollLeft = scrollL - dx;
            container.scrollTop = scrollT - dy;
        };

        const onUp = () => {
            isDragging = false;
        };
        
        container.addEventListener('wheel', (e) => {
            if (this.state !== 'MAP') return;
            e.preventDefault();
            const zoomDelta = e.deltaY > 0 ? -0.05 : 0.05;
            this.mapZoom = Math.max(0.28, Math.min(1.0, this.mapZoom + zoomDelta));
            this.applyMapZoom();
        }, { passive: false });

        // Map Scroll Handle (PC Only - prevent ghost dragging)
        container.onmousedown = (e) => {
            if (this.state !== 'MAP') return;
            e.preventDefault(); // THIS PREVENTS "GHOST DRAG" AND TEXT SELECTION!
            onDown(e.pageX, e.pageY);
        };
        window.addEventListener('mousemove', (e) => {
            if (this.state === 'MAP') onMove(e.pageX, e.pageY);
        });
        window.addEventListener('mouseup', onUp);

        // Map Click Handle
        this.canvas.onclick = (e) => {
            if (hasMoved || this.state !== 'MAP') return;
            const rect = this.canvas.getBoundingClientRect();
            const scaleX = this.canvas.width / rect.width;
            const scaleY = this.canvas.height / rect.height;
            const mouseX = (e.clientX - rect.left) * scaleX;
            const mouseY = (e.clientY - rect.top) * scaleY;
            this.handleMapClick(mouseX, mouseY);
        };

        // Battle Input Handle
        this.battleCanvas.onmousedown = (e) => {
            if (this.state !== 'BATTLE' || !this.battle) return;
            e.preventDefault();
            const rect = this.battleCanvas.getBoundingClientRect();
            const scaleX = this.battleCanvas.width / rect.width;
            const scaleY = this.battleCanvas.height / rect.height;
            const x = (e.clientX - rect.left) * scaleX;
            const y = (e.clientY - rect.top) * scaleY;
            this.battle.handleClick(x, y);
        };
        this.battleCanvas.onmousemove = (e) => {
            if (this.state !== 'BATTLE' || !this.battle) return;
            const rect = this.battleCanvas.getBoundingClientRect();
            const scaleX = this.battleCanvas.width / rect.width;
            const scaleY = this.battleCanvas.height / rect.height;
            const x = (e.clientX - rect.left) * scaleX;
            const y = (e.clientY - rect.top) * scaleY;
            this.battle.handleMouseMove(x, y);
        };
        // UI Bindings
        document.getElementById('btn-cat-domestic').onclick = () => this.showPanel('panel-domestic');
        document.getElementById('btn-cat-military').onclick = () => this.showPanel('panel-military');
        document.getElementById('btn-cat-diplomacy').onclick = () => this.showPanel('panel-diplomacy');
        document.getElementById('btn-pass').onclick = () => { 
            if (this.isPlayerTurn()) {
                this.log(`${this.actingTerritory.name}は休養しました。`);
                this.nextAction();
            }
        };

        document.querySelectorAll('.btn-cancel-cat').forEach(btn => {
            btn.onclick = () => this.showPanel('action-categories');
        });

        document.getElementById('btn-開墾').onclick = () => { if (this.isPlayerTurn()) this.develop(); };
        document.getElementById('btn-治水').onclick = () => { if (this.isPlayerTurn()) this.floodControl(); };
        document.getElementById('btn-商売').onclick = () => { if (this.isPlayerTurn()) this.commerce(); };
        document.getElementById('btn-施し').onclick = () => { if (this.isPlayerTurn()) this.give(); };
        document.getElementById('btn-徴兵').onclick = () => { if (this.isPlayerTurn()) this.conscript(); };
        document.getElementById('btn-訓練').onclick = () => { if (this.isPlayerTurn()) this.trainTerritory(); };
        document.getElementById('btn-移動').onclick = () => { if (this.isPlayerTurn()) this.moveTroops(); };
        document.getElementById('btn-出陣').onclick = () => { if (this.isPlayerTurn()) this.startBattle(); };
        document.getElementById('btn-商人').onclick = () => {
            if (!this.actingTerritory.hasMerchant) {
                this.log("現在、この領地には商人が訪れていません。");
                return;
            }
            this.showPanel('merchant-menu');
            this.log(`商人:「米の相場は ${this.ricePrice} ほどで。武器もございますぜ」`);
        };
        document.getElementById('btn-密偵').onclick = () => { if (this.isPlayerTurn()) this.spy(); };
        document.getElementById('btn-贈物').onclick = () => { if (this.isPlayerTurn()) this.gift(); };

        // Merchant buttons
        document.getElementById('btn-cancel-merchant').onclick = () => this.showPanel('panel-diplomacy');
        document.getElementById('btn-buy-rice').onclick = () => this.merchantTrade('buy-rice');
        document.getElementById('btn-sell-rice').onclick = () => this.merchantTrade('sell-rice');
        document.getElementById('btn-buy-arms').onclick = () => this.merchantTrade('buy-arms');

        // Num Input Overlay
        document.getElementById('btn-num-cancel').onclick = () => {
            document.getElementById('num-input-overlay').classList.add('hidden');
        };
        document.getElementById('btn-num-ok').onclick = () => {
            if (this.numInputCallback) {
                const val = parseInt(document.getElementById('num-input-field').value, 10) || 0;
                document.getElementById('num-input-overlay').classList.add('hidden');
                this.numInputCallback(val);
            }
        };

        // Minimap buttons
        const btnToggle = document.getElementById('btn-toggle-minimap');
        if (btnToggle) btnToggle.onclick = () => this.toggleMinimap(true);
        const btnClose = document.getElementById('btn-close-minimap');
        if (btnClose) btnClose.onclick = () => this.toggleMinimap(false);

        // Minimap Click-to-Scroll
        if (this.minimapCanvas) {
            this.minimapCanvas.onclick = (e) => {
                const rect = this.minimapCanvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const scaleX = 4000 / rect.width;
                const scaleY = 2000 / rect.height;
                
                const targetX = x * scaleX;
                const targetY = y * scaleY;
                
                container.scrollLeft = (targetX * this.mapZoom) - container.clientWidth / 2;
                container.scrollTop = (targetY * this.mapZoom) - container.clientHeight / 2;
                this.renderMinimap();
            };
        }

        // --- Zoom Implementation is now in this.setZoom ---

        // Mouse Wheel Zoom
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = -e.deltaY;
            const factor = delta > 0 ? 1.1 : 0.9;
            const rect = container.getBoundingClientRect();
            this.setZoom(this.zoom * factor, e.clientX - rect.left, e.clientY - rect.top);
        }, { passive: false });

        // Pinch Zoom
        let initialPinchDist = null;
        container.addEventListener('touchmove', (e) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const dist = Math.hypot(
                    e.touches[0].pageX - e.touches[1].pageX,
                    e.touches[0].pageY - e.touches[1].pageY
                );
                if (initialPinchDist === null) {
                    initialPinchDist = dist;
                } else {
                    const factor = dist / initialPinchDist;
                    const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                    const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                    const rect = container.getBoundingClientRect();
                    this.setZoom(this.zoom * factor, centerX - rect.left, centerY - rect.top);
                    initialPinchDist = dist;
                }
            }
        }, { passive: false });

        container.addEventListener('touchend', (e) => {
            if (e.touches.length < 2) initialPinchDist = null;
        });
    }

    isPlayerTurn() {
        return this.state === 'MAP' && this.actingTerritory && this.actingTerritory.ownerId === this.playerOwnedId;
    }

    handleMapClick(x, y) {
        if (!this.isPlayerTurn()) return;
        
        const blockSize = 160; 
        const territory = this.territories.find(t => 
            x >= t.gridX && x <= t.gridX + blockSize && 
            y >= t.gridY && y <= t.gridY + blockSize
        );
        
        if (territory) {
            this.selectedTerritory = territory;
            this.showTerritoryInfo(territory);
        } else {
            // Clicked empty space. Revert to showing our own acting territory's panel
            this.selectedTerritory = this.actingTerritory;
            this.showTerritoryInfo(this.actingTerritory);
        }
    }

    showTerritoryInfo(t) {
        document.getElementById('info-panel').classList.remove('hidden');
        
        let territoryType = "";
        if (t.ownerId === this.playerOwnedId) {
            territoryType = (t.id === this.playerHonkokuId) ? "【本国】" : "【直轄地】";
        } else {
            territoryType = "【他国】";
        }
        
        document.getElementById('territory-name').innerHTML = `${t.name} <span style="color:#ffd700; font-size: 16px;">${territoryType}</span>`;
        const owner = this.generals.find(g => g.id === t.ownerId);
        document.getElementById('territory-owner').innerText = `領主: ${owner ? owner.name : 'なし'}`;
        
        // Resources display
        document.getElementById('territory-resources').innerHTML = `
            <span>兵士: ${t.soldiers}</span>
            <span>金: ${t.gold}</span>
            <span>米: ${t.rice}</span>
        `;
        
        // Stats display
        const statsEl = document.getElementById('territory-stats');
        statsEl.innerHTML = `
            <span>開墾: ${t.development}</span>
            <span>治水: ${t.floodControl}</span>
            <span>商業: ${t.commerce}</span>
            <span>民心: ${t.loyalty}</span>
            <span>訓練: ${t.training}</span>
            <span>武装: ${t.armament}</span>
        `;
        
        const actionPanel = document.querySelector('.actions');
        
        if (t === this.actingTerritory) {
            // 本国コマンド表示
            actionPanel.classList.remove('hidden');
            this.showPanel('action-categories');
            document.getElementById('btn-出陣').innerText = '出陣先を選択';
            document.getElementById('btn-移動').innerText = '移動先を選択';
        } else {
            // 他領地を選択した場合
            const isAdjacent = this.isAdjacent(this.actingTerritory, t);
            
            if (isAdjacent) {
                actionPanel.classList.remove('hidden');
                
                if (t.ownerId === this.playerOwnedId) {
                    // 自国の別領地
                    this.showPanel('panel-military');
                    const container = document.getElementById('panel-military');
                    container.querySelectorAll('button').forEach(c => c.classList.add('hidden'));
                    const btnMove = document.getElementById('btn-移動');
                    btnMove.classList.remove('hidden');
                    btnMove.innerText = 'ここに移動！';
                } else {
                    // 敵国領地
                    this.showPanel('panel-military');
                    const container = document.getElementById('panel-military');
                    container.querySelectorAll('button').forEach(c => c.classList.add('hidden'));
                    const btnAttack = document.getElementById('btn-出陣');
                    btnAttack.classList.remove('hidden');
                    btnAttack.innerText = 'ここに出陣！';
                }
            } else {
                actionPanel.classList.add('hidden');
            }
        }
    }

    showPanel(panelId) {
        document.querySelectorAll('.actions .action-group').forEach(el => {
            el.classList.add('hidden');
        });
        const target = document.getElementById(panelId);
        if (target) {
            target.classList.remove('hidden');
            // Make sure children (buttons) are visible
            target.querySelectorAll('button').forEach(c => c.classList.remove('hidden'));
        }
    }

    openNumInput(title, descText, maxVal, callback) {
        document.getElementById('num-input-title').innerText = title;
        document.getElementById('num-input-desc').innerText = descText;
        const field = document.getElementById('num-input-field');
        field.value = 0;
        field.max = maxVal;
        document.getElementById('num-input-overlay').classList.remove('hidden');
        this.numInputCallback = callback;
    }



    merchantTrade(type) {
        const t = this.actingTerritory;
        if (!t) return;

        switch (type) {
            case 'buy-rice':
                if (t.gold < 100) { this.log("商:「金100は持ってきてくだせえ」"); return; }
                t.gold -= 100;
                const riceGain = 100 * this.ricePrice;
                t.rice += riceGain;
                this.log(`商人から米を${riceGain}買い入れました。`);
                break;
            case 'sell-rice':
                const riceSell = 500;
                if (t.rice < riceSell) { this.log("商:「売る米が足りねえようですな」"); return; }
                t.rice -= riceSell;
                const goldGain = Math.floor(riceSell / (this.ricePrice + 1));
                t.gold += goldGain;
                this.log(`米を売却し、金${goldGain}を得ました。`);
                break;
            case 'buy-arms':
                if (t.gold < 200) { this.log("商:「武器は高いですよ。金200くだせえ」"); return; }
                t.gold -= 200;
                const armUp = 15 + Math.floor(Math.random() * 10);
                t.armament = Math.min(100, t.armament + armUp);
                this.log(`最新の武器を購入。武装度+${armUp}`);
                break;
        }
        this.nextAction();
    }

    isAdjacent(t1, t2) {
        if (!window.ADJACENCY_MAP_BUILT) {
            window.ADJACENCY_MAP = {
                1: [2],
                2: [1, 3, 4, 5],
                3: [2, 4, 5],
                4: [2, 3, 5, 6, 8],
                5: [2, 3, 4, 6],
                6: [4, 5, 7, 8],
                7: [6, 8, 9, 17, 24],
                8: [4, 6, 7, 9, 10],
                9: [7, 8, 14, 17],
                10: [8, 11],
                11: [8, 10, 12, 14],
                12: [11, 13],
                13: [12, 14],
                14: [9, 11, 13, 15],
                15: [14, 16],
                16: [15, 17, 18],
                17: [7, 9, 16, 19, 20, 22, 23],
                18: [16, 19],
                19: [17, 18, 20],
                20: [17, 19, 21],
                21: [20, 22, 26, 28], // 尾張21は20, 22, 26, 28と隣接
                22: [17, 21, 23, 28],
                23: [17, 22, 24],
                24: [7, 23, 25],
                25: [24],
                26: [21, 27, 28, 30, 31],
                27: [26],
                28: [21, 22, 26, 29, 34],
                29: [28, 30, 33, 34], // 山城
                30: [26, 29, 31, 32],
                31: [26, 30, 32],
                32: [30, 31, 33],
                33: [29, 32, 34, 37, 46],
                34: [28, 29, 33, 35, 36],
                35: [34, 36],
                36: [34, 35, 37, 38],
                37: [33, 36, 38, 42],
                38: [36, 37, 39, 42],
                39: [38, 40, 42, 43],
                40: [39, 41, 43],
                41: [40, 44, 45],
                42: [37, 38, 39, 43],
                43: [39, 40, 42, 44],
                44: [41, 43, 45, 48],
                45: [41, 44, 50],
                46: [33, 47, 49],
                47: [46, 48],
                48: [44, 47, 49, 50],
                49: [46, 48],
                50: [45, 48]
            };
            // Ensure symmetry
            for (let k in window.ADJACENCY_MAP) {
                window.ADJACENCY_MAP[k].forEach(adj => {
                    if (!window.ADJACENCY_MAP[adj]) window.ADJACENCY_MAP[adj] = [];
                    if (!window.ADJACENCY_MAP[adj].includes(parseInt(k))) {
                        window.ADJACENCY_MAP[adj].push(parseInt(k));
                    }
                });
            }
            window.ADJACENCY_MAP_BUILT = true;
        }
        const id1 = t1.id + 1;
        const id2 = t2.id + 1;
        return window.ADJACENCY_MAP[id1] && window.ADJACENCY_MAP[id1].includes(id2);
    }

    develop() {
        const t = this.actingTerritory;
        this.openNumInput(`開墾に投資する金額`, `所持金: ${t.gold} (金10につき開発+1)`, Math.min(t.gold, 1000), (amount) => {
            if (amount <= 0) return;
            if (t.gold < amount) { this.log("金が足りません"); return; }
            t.gold -= amount;
            const up = Math.floor(amount / 10);
            t.development = Math.min(100, t.development + up);
            this.log(`${t.name}の開墾を行いました。開発+${up}`);
            this.nextAction();
        });
    }

    floodControl() {
        const t = this.actingTerritory;
        this.openNumInput(`治水に投資する金額`, `所持金: ${t.gold} (金10につき治水+1)`, Math.min(t.gold, 1000), (amount) => {
            if (amount <= 0) return;
            t.gold -= amount;
            const up = Math.floor(amount / 10);
            t.floodControl = Math.min(100, t.floodControl + up);
            this.log(`${t.name}の治水工事を行いました。治水+${up}`);
            this.nextAction();
        });
    }

    commerce() {
        const t = this.actingTerritory;
        this.openNumInput(`商業に投資する金額`, `所持金: ${t.gold} (金10につき商業+1)`, Math.min(t.gold, 1000), (amount) => {
            if (amount <= 0) return;
            t.gold -= amount;
            const up = Math.floor(amount / 10);
            t.commerce = Math.min(100, t.commerce + up);
            this.log(`${t.name}の商業投資を行いました。商業+${up}`);
            this.nextAction();
        });
    }

    give() {
        const t = this.actingTerritory;
        this.openNumInput(`領民に施す米の量`, `所持米: ${t.rice} (米10につき民心+1)`, Math.min(t.rice, 1000), (amount) => {
            if (amount <= 0) return;
            t.rice -= amount;
            const up = Math.floor(amount / 10);
            t.loyalty = Math.min(100, t.loyalty + up);
            this.log(`${t.name}の民に米${amount}を施しました。民心+${up}`);
            this.nextAction();
        });
    }

    conscript() {
        const t = this.actingTerritory;
        this.openNumInput(`徴兵する人数`, `所持金: ${t.gold} (金1で兵1・民心低下)`, t.gold, (amount) => {
            if (amount <= 0) return;
            t.gold -= amount;
            t.soldiers += amount;
            const minDown = Math.floor(amount / 100);
            t.loyalty = Math.max(0, t.loyalty - minDown);
            
            const currentTotal = t.soldiers - amount;
            if (t.soldiers > 0) t.training = Math.floor((t.training * currentTotal) / t.soldiers);
            
            this.log(`${t.name}で兵士${amount}人を徴兵しました。民心-${minDown}、訓練度が低下しました。`);
            this.nextAction();
        });
    }

    trainTerritory() {
        const t = this.actingTerritory;
        this.log(`${t.name}にて時間をかけて軍事訓練を実施。訓練度が上昇しました！`);
        const up = 10 + Math.floor(Math.random() * 15);
        t.training = Math.min(100, t.training + up);
        this.nextAction();
    }

    moveTroops() {
        if (!this.actingTerritory || !this.selectedTerritory) return;
        if (this.selectedTerritory === this.actingTerritory) {
            this.log("マップ上で隣接する「自軍の領地」を選んでから[ここに移動]を押してください。");
            return;
        }

        if (this.selectedTerritory.ownerId !== this.playerOwnedId) {
            this.log("移動先は自国の領地である必要があります。");
            return;
        }

        if (!this.isAdjacent(this.actingTerritory, this.selectedTerritory)) {
            this.log("その領地は隣接していません。");
            return;
        }

        const t = this.actingTerritory;
        const target = this.selectedTerritory;
        this.openNumInput(`移動させる兵士数`, `現在兵士: ${t.soldiers} (全員移動で大将も移動)`, t.soldiers, (amount) => {
            if (amount <= 0) return;
            t.soldiers -= amount;
            target.soldiers += amount;
            this.log(`${t.name}から${target.name}へ兵士${amount}人を移動させました。`);
            
            if (t.soldiers === 0 && amount > 0) {
                this.log(`総大将も${target.name}へ拠点を移しました。`);
            }
            
            document.getElementById('info-panel').classList.add('hidden');
            this.nextAction();
        });
    }

    spy() {
        const t = this.actingTerritory;
        if (t.gold < 100) { this.log("金が足りません（必要: 100）"); return; }
        t.gold -= 100;
        this.log("密偵を放ちました。隣接諸国の動向を探ります。（一部情報開示）");
        // Update intel logic or simply display next turn details better
        this.nextAction();
    }

    gift() {
        const t = this.actingTerritory;
        if (t.gold < 200) { this.log("金が足りません（必要: 200）"); return; }
        t.gold -= 200;
        this.log("隣国の有力大名へ金200相当の貢物を送りました。関係性が改善しました！");
        this.nextAction();
    }

    startBattle() {
        this.attackingTerritory = this.actingTerritory;
        
        if (!this.attackingTerritory || !this.selectedTerritory) return;
        
        if (this.selectedTerritory.ownerId === this.playerOwnedId) {
            this.log("マップ上で隣接する「敵の領地」を直接クリック（タップ）して出陣先を選んでください。");
            return;
        }

        if (!this.isAdjacent(this.attackingTerritory, this.selectedTerritory)) {
            this.log("その領地は隣接していないため出陣できません。");
            return;
        }
        
        const enemyTerritory = this.selectedTerritory;
        
        this.openNumInput(`出陣する兵士数`, `出陣元: ${this.attackingTerritory.soldiers}人 (出陣分が減ります)`, this.attackingTerritory.soldiers, (amount) => {
            if (amount <= 0) return;
            
            // Deduct from attacking territory
            this.attackingTerritory.soldiers -= amount;

            const playerGeneral = this.generals.find(g => g.id === this.playerOwnedId);
            const enemyGeneral = this.generals.find(g => g.id === enemyTerritory.ownerId);
            
            this.log(`${amount}名の兵で ${enemyTerritory.name} へ出陣！`);
            this.state = 'BATTLE';
            this.battleType = 'offense';
            this.targetTerritory = enemyTerritory;
            
            // UI Switch
            document.getElementById('map-world-container').classList.add('hidden');
            document.getElementById('info-panel').classList.add('hidden');
            this.battleCanvas.classList.remove('hidden');
            
            // Swap renderer context to battle canvas
            this.renderer.ctx = this.battleCtx;
            
            this.battle = new Battle(
                this.battleCtx, 
                this.renderer, 
                { ...playerGeneral, name: "自軍(" + playerGeneral.name + ")", soldiers: amount, training: this.attackingTerritory.training, armament: this.attackingTerritory.armament }, 
                { ...enemyGeneral, name: "敵軍(" + enemyGeneral.name + ")", soldiers: enemyTerritory.soldiers, training: enemyTerritory.training, armament: enemyTerritory.armament }, 
                'offense',
                (result) => this.endBattle(result)
            );
        });
    }

    startDefenseBattle(playerTerritory, attackingCpuTerritory) {
        const playerGeneral = this.generals.find(g => g.id === this.playerOwnedId);
        const enemyGeneral = this.generals.find(g => g.id === attackingCpuTerritory.ownerId);
        
        this.log(`${enemyGeneral.name}軍が我が ${playerTerritory.name} へ侵攻してきました！防衛戦です！`);
        this.state = 'BATTLE';
        this.battleType = 'defense';
        this.targetTerritory = playerTerritory;
        this.attackingTerritory = attackingCpuTerritory;
        
        document.getElementById('map-world-container').classList.add('hidden');
        document.getElementById('info-panel').classList.add('hidden');
        this.battleCanvas.classList.remove('hidden');
        this.renderer.ctx = this.battleCtx;
        
        this.battle = new Battle(
            this.battleCtx, 
            this.renderer, 
            { ...playerGeneral, name: "自軍(" + playerGeneral.name + ")", soldiers: playerTerritory.soldiers, training: playerTerritory.training, armament: playerTerritory.armament }, 
            { ...enemyGeneral, name: "敵軍(" + enemyGeneral.name + ")", soldiers: attackingCpuTerritory.soldiers, training: attackingCpuTerritory.training, armament: attackingCpuTerritory.armament }, 
            'defense',
            (result) => this.endBattle(result)
        );
    }

    endBattle(result) {
        this.state = 'MAP';
        this.battleCanvas.classList.add('hidden');
        document.getElementById('map-world-container').classList.remove('hidden');
        
        // Restore renderer context to map canvas
        this.renderer.ctx = this.ctx;

        if (result === 'win') {
            if (this.battleType === 'offense') {
                this.log(`勝利！${this.targetTerritory.name}を制圧しました。`);
                this.targetTerritory.ownerId = this.playerOwnedId;
                this.targetTerritory.soldiers = this.battle.getTotalHp(this.battle.playerUnits);
            } else {
                this.log(`防衛成功！${this.targetTerritory.name}を守り抜きました。`);
                this.targetTerritory.soldiers = this.battle.getTotalHp(this.battle.playerUnits);
            }
        } else if (result === 'lose') {
            this.log("大将が討ち死にしました... 全直轄地を奪われ、ゲームオーバーです。");
            this.territories.forEach(t => {
                if (t.ownerId === this.playerOwnedId) t.ownerId = this.targetTerritory.ownerId;
            });
            setTimeout(() => {
                alert("総大将が討ち取られ、全直轄地を失いました。ゲームオーバー。");
                location.reload();
            }, 3000);
            return;
        } else if (result === 'retreat') {
            if (this.battleType === 'offense') {
                this.log(`退却しました。出陣元の${this.attackingTerritory.name}へ生存部隊を戻します。`);
                this.attackingTerritory.soldiers += this.battle.getTotalHp(this.battle.playerUnits);
            } else {
                const adjacentPlayerTerritories = this.territories.filter(t => t.ownerId === this.playerOwnedId && this.isAdjacent(this.targetTerritory, t));
                if (adjacentPlayerTerritories.length > 0) {
                    this.log(`隣接する直轄地に退却しました！攻められた ${this.targetTerritory.name} は奪われました。`);
                    this.targetTerritory.ownerId = this.attackingTerritory.ownerId; 
                    const escapeTarget = adjacentPlayerTerritories[0];
                    escapeTarget.soldiers += this.battle.getTotalHp(this.battle.playerUnits);
                    
                    if (this.targetTerritory.id === this.playerHonkokuId) {
                        this.playerHonkokuId = escapeTarget.id;
                        this.log(`【本国】が ${escapeTarget.name} に移転しました。`);
                    }
                } else {
                    this.log("退却できる隣接する直轄地がありません！部隊は崩壊し、土地は奪われました...");
                    this.targetTerritory.ownerId = this.attackingTerritory.ownerId; 
                    const remaining = this.territories.filter(t => t.ownerId === this.playerOwnedId);
                    if (remaining.length === 0) {
                        this.log("すべての直轄地を失った... ゲームオーバーです。");
                        setTimeout(() => {
                            alert("すべての直轄地を失いました。ゲームオーバー。");
                            location.reload();
                        }, 3000);
                        return;
                    }
                }
            }
        }
        
        this.battle = null;
        this.nextAction();
    }

    startNextMonth() {
        this.month++;
        if (this.month > 12) {
            this.month = 1;
            this.year++;
        }
        
        let eventMessages = [];

        // 季節イベント: 正月（金銭収入）
        if (this.month === 1) {
            this.territories.forEach(t => {
                const income = Math.floor(t.commerce * (0.8 + Math.random() * 0.4) * 10);
                t.gold += income;
            });
            eventMessages.push("新年を迎え、各国の商業度にあわせた春の金銭収入がありました。");
        }
        
        // 季節イベント: 秋（兵糧収入）
        if (this.month === 9) {
            this.territories.forEach(t => {
                const harvest = Math.floor(t.development * (0.8 + Math.random() * 0.4) * 20);
                t.rice += harvest;
            });
            eventMessages.push("秋の収穫期です。各国の開発度（石高）に応じた兵糧が納められました。");
        }

        // 維持費 (毎月)
        this.territories.forEach(t => {
            const cost = Math.floor(t.soldiers * 0.5); // 毎月の兵士ごとの兵糧消費
            if (t.rice >= cost) {
                t.rice -= cost;
            } else {
                const supported = Math.floor(t.rice / 0.5);
                const escape = Math.max(1, t.soldiers - supported);
                t.rice = 0;
                t.soldiers = Math.max(0, t.soldiers - escape);
                if (t.ownerId === this.playerOwnedId) {
                    eventMessages.push(`兵糧不足により、${t.name}の兵士が${escape}人逃亡しました！`);
                }
            }
        });

        // 災害・ランダムイベント
        const randEvent = Math.random();
        // 台風 (7月〜9月)
        if (this.month >= 7 && this.month <= 9 && Math.random() < 0.2) {
            const target = this.territories[Math.floor(Math.random() * this.territories.length)];
            const damage = Math.max(0, 30 - target.floodControl);
            target.development = Math.max(0, target.development - damage);
            if (damage > 0) eventMessages.push(`${target.name}に台風が直撃！治水が不遇のため開発（石高）が-${damage}大打撃を受けました。`);
            else eventMessages.push(`${target.name}に台風が上陸しましたが、十分な治水により被害は軽微でした。`);
        }
        // 疫病
        if (randEvent < 0.05) {
            const target = this.territories[Math.floor(Math.random() * this.territories.length)];
            const dead = Math.floor(target.soldiers * 0.2);
            target.soldiers = Math.max(0, target.soldiers - dead);
            eventMessages.push(`${target.name}に疫病が発生... 兵士が${dead}人死亡しました。`);
        }

        let season = "冬";
        if (this.month === 4 || this.month === 5) season = "春";
        else if (this.month >= 6 && this.month <= 9) season = "夏";
        else if (this.month === 10 || this.month === 11) season = "秋";

        const turnString = `${this.year}年 ${this.month}月 （${season}）`;
        document.getElementById('current-year').innerText = turnString;
        
        eventMessages.forEach(m => this.log(m));

        // Shuffle turn order
        this.turnQueue = [...this.territories].sort(() => Math.random() - 0.5);
        this.currentTurnIdx = 0;
        
        // Randomize rice price (fluctuation)
        this.ricePrice = 3 + Math.floor(Math.random() * 5); 

        // Merchant arrival: 30% chance per territory, higher if high commerce
        this.territories.forEach(t => {
            const chance = 0.2 + (t.commerce / 200);
            t.hasMerchant = Math.random() < chance;
        });

        this.updateResources();

        this.showMonthOverlay(turnString, () => this.processTurn());
    }

    showMonthOverlay(text, callback) {
        const overlay = document.getElementById('turn-overlay');
        const textElement = document.getElementById('turn-text');
        if (overlay && textElement) {
            textElement.innerText = text;
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.classList.add('hidden');
                if (callback) callback();
            }, 4000); // 延長4秒に変更
        } else if (callback) callback();
    }

    processTurn() {
        if (this.currentTurnIdx >= this.turnQueue.length) {
            this.startNextMonth();
            return;
        }

        const territory = this.turnQueue[this.currentTurnIdx];
        this.actingTerritory = territory;
        
        if (territory.ownerId === this.playerOwnedId) {
            // Player's turn to act for this specific territory
            this.log(`${territory.name}: 行動を選択してください。`);
            this.selectedTerritory = territory;
            this.showTerritoryInfo(territory);
            // Highlight acting territory on map happens in update()
        } else {
            // CPU acting for this specific territory
            this.cpuTerritoryTurn(territory);
        }
    }

    nextAction() {
        // ターン終了時に自国のステータスとコマンド表示を消す
        if (this.actingTerritory && this.actingTerritory.ownerId === this.playerOwnedId) {
            document.getElementById('info-panel').classList.add('hidden');
        }

        this.currentTurnIdx++;
        // Small delay for non-player actions to be visible
        const delay = this.actingTerritory && this.actingTerritory.ownerId !== this.playerOwnedId ? 300 : 0;
        setTimeout(() => this.processTurn(), delay);
    }

    cpuTerritoryTurn(t) {
        const gen = this.generals.find(g => g.id === t.ownerId);
        if (!gen) { this.nextAction(); return; }

        const rand = Math.random();
        if (rand < 0.2) {
            // Attack attempt
            const targets = this.territories.filter(target => target.ownerId !== gen.id && this.isAdjacent(t, target));
            if (targets.length > 0) {
                const target = targets[Math.floor(Math.random() * targets.length)];
                if (target.ownerId === this.playerOwnedId) {
                    // Start Defense Battle!
                    this.startDefenseBattle(target, t);
                    return; // Pause CPU turn until battle ends
                } else {
                    if (Math.random() > 0.6) {
                        target.ownerId = gen.id;
                        this.log(`${gen.name}軍が ${target.name} を制圧しました。`);
                    }
                }
            }
        } else if (rand < 0.4) {
            // Internal affairs (Develop, Commerce, Flood)
            const subRand = Math.random();
            if (subRand < 0.3) t.development = Math.min(100, t.development + 5);
            else if (subRand < 0.6) t.commerce = Math.min(100, t.commerce + 5);
            else t.floodControl = Math.min(100, t.floodControl + 5);
        } else if (rand < 0.6) {
            // Military Affairs (Train, Arm)
            const subRand = Math.random();
            if (subRand < 0.7) t.training = Math.min(100, t.training + 10);
            else t.armament = Math.min(100, t.armament + 5);
        } else if (rand < 0.8) {
            t.soldiers += 150;
            t.loyalty = Math.max(0, t.loyalty - 2);
        } else {
            t.loyalty = Math.min(100, t.loyalty + 5);
        }
        this.nextAction();
    }

    updateResources() {
        this.territories.forEach(t => { 
            if (t.ownerId) { 
                // FC-style: Income based on stats
                // Shogyo affects Gold, Development affects Rice
                // Flood control slightly buffs income safety
                const goldIncome = 50 + t.commerce * 2 + Math.floor(t.floodControl / 2);
                const riceIncome = 80 + t.development * 3 + Math.floor(t.floodControl / 2);
                
                t.gold += goldIncome;
                t.rice += riceIncome;
            } 
        });
        
        // Update resources display for player in header
        const playerTerritories = this.territories.filter(t => t.ownerId === this.playerOwnedId);
        const totalGold = playerTerritories.reduce((sum, t) => sum + t.gold, 0);
        const totalRice = playerTerritories.reduce((sum, t) => sum + t.rice, 0);
        const playerStatEl = document.getElementById('player-resources');
        if (playerStatEl) {
            playerStatEl.innerText = `金: ${totalGold} | 米: ${totalRice}`;
        }
    }

    log(msg) { document.getElementById('message-log').innerText = msg; }

    toggleMinimap(show) {
        const overlay = document.getElementById('minimap-overlay');
        if (!overlay) return;
        if (show) {
            overlay.classList.remove('hidden');
            this.renderMinimap();
        } else {
            overlay.classList.add('hidden');
        }
    }

    renderMinimap() {
        if (!this.minimapCtx) return;
        const ctx = this.minimapCtx;
        const scale = 1000 / 4000; // 1/4
        
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 1000, 500);
        
        ctx.save();
        ctx.scale(scale, scale);
        
        // Hijack renderer for a moment
        const originalCtx = this.renderer.ctx;
        this.renderer.ctx = ctx;
        
        // Draw Guide Line
        this.renderer.drawJapanOutline();
        
        // Draw Nations
        this.territories.forEach(t => {
            ctx.fillStyle = (t.ownerId === this.playerOwnedId) ? "#3498db" : "#e74c3c";
            ctx.fillRect(t.gridX, t.gridY, 160, 160);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.strokeRect(t.gridX, t.gridY, 160, 160);
        });

        // Draw current view rectangle (adjust for zoom)
        const container = document.getElementById('map-world-container');
        if (container) {
            const z = this.mapZoom || 1.0;
            const rx = container.scrollLeft / z;
            const ry = container.scrollTop / z;
            const rw = container.clientWidth / z;
            const rh = container.clientHeight / z;

            ctx.strokeStyle = "#ffd700";
            ctx.lineWidth = 20;
            ctx.strokeRect(rx, ry, rw, rh);
            ctx.fillStyle = "rgba(255, 215, 0, 0.1)";
            ctx.fillRect(rx, ry, rw, rh);
        }
        
        this.renderer.ctx = originalCtx;
        ctx.restore();
    }

    update() {
        if (!this.ctx) return;
        
        try {
            if (this.state === 'MAP') {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.renderer.drawJapanOutline();
                
                if (this.territories) {
                    this.territories.forEach(t => {
                        const isSelected = this.selectedTerritory && this.selectedTerritory.id === t.id;
                        const isActing = this.actingTerritory && this.actingTerritory.id === t.id;
                        
                        const size = 160;
                        const x = t.gridX;
                        const y = t.gridY;
                        
                        this.ctx.fillStyle = isSelected ? "#333" : "#222";
                        this.ctx.fillRect(x, y, size, size);
                        this.ctx.strokeStyle = isSelected ? "#ffd700" : "#555";
                        this.ctx.lineWidth = isSelected ? 4 : 2;
                        this.ctx.strokeRect(x, y, size, size);

                        this.ctx.fillStyle = "#fff";
                        this.ctx.font = "bold 18px 'Outfit'";
                        this.ctx.textAlign = "center";
                        this.ctx.fillText(t.name, x + size/2, y + 40);

                        const owner = this.generals.find(g => g.id === t.ownerId);
                        this.ctx.fillStyle = t.ownerId === this.playerOwnedId ? "#3498db" : "#e74c3c";
                        this.ctx.font = "16px 'Outfit'";
                        this.ctx.fillText(owner ? owner.name : "なし", x + size/2, y + 65);

                        let tTag = "";
                        if (t.ownerId === this.playerOwnedId) {
                            tTag = (t.id === this.playerHonkokuId) ? "[本国]" : "[直轄地]";
                            this.ctx.fillStyle = "#ffd700";
                            this.ctx.font = "12px 'Outfit'";
                            this.ctx.fillText(tTag, x + size/2, y + 85);
                        }

                        this.ctx.fillStyle = "#aaa";
                        this.ctx.font = "14px 'Outfit'";
                        this.ctx.fillText(`兵:${t.soldiers}`, x + size/2, y + 100);
                        
                        if (isActing) {
                            const pulse = (Math.sin(Date.now() / 200) + 1) / 2;
                            this.ctx.strokeStyle = `rgba(255, 215, 0, ${pulse})`;
                            this.ctx.lineWidth = 6;
                            this.ctx.strokeRect(x - 5, y - 5, size + 10, size + 10);
                        }
                    });
                }
            } else if (this.state === 'BATTLE' && this.battle && this.battleCtx) {
                this.battleCtx.clearRect(0, 0, this.battleCanvas.width, this.battleCanvas.height);
                this.battle.update();
            }
        } catch (e) {
            console.error("Update error:", e);
        }
        requestAnimationFrame(() => this.update());
    }
}

// main.js equivalent
window.addEventListener('load', () => {
    console.log("App loaded");
    const game = new Game('game-canvas');
});
