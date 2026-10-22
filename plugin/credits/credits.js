window.RevealCredits = function () {
  return {
    id: "generate-credits",
    init: (deck) => {
      let creditsList = [];
      deck.on("ready", function (event) {
        try {
          const allSlides = deck.getSlides();
          console.log(allSlides);
          for (let i = 0; i < allSlides.length; i++) {
            const imageOnPage = Array.from(
              allSlides[i].getElementsByTagName("img"),
            ).filter((image) => image.getAttribute("data-credit"));
            if (imageOnPage.length > 0) {
              imageOnPage.forEach((image) =>
                creditsList.push(`${i}: ${image.getAttribute("data-credit")}`),
              );
            }
          }
        } catch (e) {
          //do nothing
        }

        var container = $("#photocredits");
        container.append(creditsList.join("<br>"));
      });
    },
  };
};
