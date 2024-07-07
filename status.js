//状态栏

const statusBanner = {
    strengthSpan: document.createElement("span"),
    moodSpan: document.createElement("span"),
    spiritSpan: document.createElement("span"),
    intelligenceSpan: document.createElement("span"),
    horizonSpan: document.createElement("span"),
    moneySpan: document.createElement("span"),
    strspan1: document.createElement("span"),
    strspan2: document.createElement("span"),
    moospan1: document.createElement("span"),
    moospan2: document.createElement("span"),
    spispan1: document.createElement("span"),
    spispan2: document.createElement("span"),
    intspan1: document.createElement("span"),
    intspan2: document.createElement("span"),
    horspan1: document.createElement("span"),
    horspan2: document.createElement("span"),
    monspan1: document.createElement("span"),
    monspan2: document.createElement("span"),
    strT: "体力：",
    mooT: "心情：",
    spiT: "精力：",
    intT: "智力：",
    horT: "眼界：",
    monT: "金钱：",
    createDiv: function(player) {
        //初始化
        this.strspan1.textContent = this.strT;
        this.moospan1.textContent = this.mooT;
        this.spispan1.textContent = this.spiT;
        this.intspan1.textContent = this.intT;
        this.horspan1.textContent = this.horT;
        this.monspan1.textContent = this.monT;
        
        this.strspan2.textContent = player.strength.toString();
        this.moospan2.textContent = player.mood.toString();
        this.spispan2.textContent = player.spirit.toString();
        this.intspan2.textContent = "***";
        this.horspan2.textContent = "***";
        this.monspan2.textContent = player.money.toString();

        this.strengthSpan.appendChild(this.strspan1);
        this.strengthSpan.appendChild(this.strspan2);
        this.moodSpan.appendChild(this.moospan1);
        this.moodSpan.appendChild(this.moospan2);
        this.spiritSpan.appendChild(this.spispan1);
        this.spiritSpan.appendChild(this.spispan2);
        this.intelligenceSpan.appendChild(this.intspan1);
        this.intelligenceSpan.appendChild(this.intspan2);
        this.horizonSpan.appendChild(this.horspan1);
        this.horizonSpan.appendChild(this.horspan2);
        this.moneySpan.appendChild(this.monspan1);
        this.moneySpan.appendChild(this.monspan2);

        this.strengthSpan.className = "status-span";
        this.moodSpan.className = "status-span";
        this.spiritSpan.className = "status-span";
        this.intelligenceSpan.className = "status-span";
        this.horizonSpan.className = "status-span";
        this.moneySpan.className = "status-span";

        let div = document.createElement("div");
        div.appendChild(this.strengthSpan);
        div.appendChild(this.moodSpan);
        div.appendChild(this.spiritSpan);
        div.appendChild(this.intelligenceSpan);
        div.appendChild(this.horizonSpan);
        div.appendChild(this.moneySpan);
        div.className = "statusBar";

        this.strspan2.className = "plain-status-span";
        this.moospan2.className = "plain-status-span";
        this.spispan2.className = "plain-status-span";
        this.intspan2.className = "plain-status-span";
        this.horspan2.className = "plain-status-span";
        this.monspan2.className = "plain-status-span";


        let toggleDebugButton = document.createElement("button");
        toggleDebugButton.textContent = "调试";
        toggleDebugButton.id = "toggleDebugButton";
        toggleDebugButton.style.display = "none";  //默认隐藏
        toggleDebugButton.onclick = () => {
            debugDiv.style.display = debugDiv.style.display === "none" ? "flex" : "none";
        };

        document.addEventListener('keydown', function(event) {
            if (event.key === '`') {
                toggleDebugButton.style.display = toggleDebugButton.style.display === 'none' ? 'inline' : 'none';
            }
        })

        div.appendChild(toggleDebugButton);

        return div;
    },
    updateDiv: function(player) {
        this.strspan2.textContent = player.strength.toString();
        this.moospan2.textContent = player.mood.toString();
        this.spispan2.textContent = player.spirit.toString();
        this.monspan2.textContent = player.money.toString();
        if (player.strength < 10) {
            this.strspan2.className = "warning-status-span";
        } else {
            this.strspan2.className = "plain-status-span";
        }
        if (player.mood < 10) {
            this.moospan2.className = "warning-status-span";
        } else {
            this.moospan2.className = "plain-status-span";
        }
        if (player.spirit < 10) {
            this.spispan2.className = "warning-status-span";
        } else {
            this.spispan2.className = "plain-status-span";
        }
        if (player.money < 500) {
            this.monspan2.className = "warning-status-span";
        } else {
            this.monspan2.className = "plain-status-span";
        }
        //达到一定条件时，显示智力、眼界数值
        if (player.intelligence > 10 && player.horizon > 15) {
            this.intspan2.textContent = player.intelligence.toString();
        } else {
            this.intspan2.textContent = "***";
        }
        if (player.intelligence > 5 && player.horizon > 20) {
            this.horspan2.textContent = player.horizon.toString();
        } else {
            this.horspan2.textContent = "***";
        }

        Object.keys(playerAttr).forEach(key => {
            document.getElementById(key).value = player[key];
        })
        Object.keys(Base).forEach(key => {
            document.getElementById(key).value = eval(key);
        })
    }
}

// 调试界面
const debugBanner = {
    createDiv: function(player) {
        let div = document.createElement("div");
        div.className = "debugDiv";
        div.id = "debugDiv";
        div.style.display = "none";


        let debugTitle = document.createElement("h3");
        debugTitle.textContent = "调试";
        div.appendChild(debugTitle);


        let debugTable = document.createElement("div");
        debugTable.className = "debugTable";
        div.appendChild(debugTable);

        Object.entries(playerAttr).forEach(([key, value]) => {
            let span = document.createElement("span");
            let label = document.createElement("label");
            label.htmlFor = key;
            label.textContent = `${value}:`;
            span.appendChild(label);

            let input = document.createElement("input");
            input.type = "number";
            input.id = key;
            input.value = player[key];
            span.appendChild(input);
            debugTable.appendChild(span);
        })

        Object.entries(Base).forEach(([key, value]) => {
            let span = document.createElement("span");
            let label = document.createElement("label");
            label.htmlFor = key;
            label.textContent = `${value}:`;
            span.appendChild(label);

            let input = document.createElement("input");
            input.type = "number";
            input.id = key;
            input.value = eval(key);
            span.appendChild(input);
            debugTable.appendChild(span);
        })

        let updateButton = document.createElement("button");
        updateButton.id = "updateButton";
        updateButton.textContent = "应用";
        updateButton.onclick = () => {
            Object.keys(playerAttr).forEach(key => {
                player[key] = parseInt(document.getElementById(key).value);
            })
            Object.keys(Base).forEach(key => {
                eval(`${key} = parseInt(document.getElementById(key).value)`);
            })
            statusBanner.updateDiv(player);
        }

        let refreshButton = document.createElement("button");
        refreshButton.id = "refreshButton";
        refreshButton.textContent = "刷新";
        refreshButton.onclick = () => {
            statusBanner.updateDiv(player);
        }

        let span = document.createElement("span");
        span.appendChild(refreshButton);
        span.appendChild(updateButton);
        div.appendChild(span);

        return div;
    },
}
