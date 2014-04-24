var displayPanel;

window.onload = appInit;

function appInit () {
	displayPanel = document.getElementById("displayPanel");
	displayPanel.textContent = "テンプレート動作テスト";
}