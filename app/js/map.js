document.addEventListener("DOMContentLoaded", () => {
  if (map != null) {
    // map init
    const map = document.querySelector(".map");
    let coordX = 46;
    let coordY = 30;

    for (let i = 1; i <= coordY; i++) {
      let point = "";
      for (let j = 1; j <= coordX; j++) {
        point += `<div data-x="${j}" data-y="${i}" class="point"></div>`;
      }
      map.innerHTML += "<div class=row>" + point + "</div>";
    }

    // click

    const mapSelected = document.querySelector(".map-total__selected"),
      mapSum = document.querySelector(".map-total__sum"),
      mapTotalBar = document.querySelector(".map-total");

    let totalSelected = 0,
      totalSum = 0;

    map.addEventListener("click", (e) => {
      let target = e.target;
      if (!target.classList.contains("point")) return;

      if (target.classList.contains("point--selected")) {
        target.classList.remove("point--selected");
        totalSelected--;
        totalSum = totalSelected * 100;
      } else {
        target.classList.add("point--selected");
        totalSelected++;
        totalSum = totalSelected * 100;
      }

      if (totalSelected > 0) {
        mapTotalBar.classList.add("map-total--opened");
      } else {
        mapTotalBar.classList.remove("map-total--opened");
      }

      updateData();
    });

    const updateData = () => {
      mapSelected.innerHTML = `Выбрано: ${totalSelected}`;
      mapSum.innerHTML = `Сумма: ${totalSum} ₽`;
    };
  }
});
