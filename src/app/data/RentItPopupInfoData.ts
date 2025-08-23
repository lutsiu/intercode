import { RentItPopupInfoType } from "../types/RentItPopupInfoType";

const biz = ["first_real_estate", "second_real_estate", "third_real_estate", "fourth_real_estate"]
  .map(n => `/rent-it-solution/popups/business/${n}.webp`);

const startup = ["first_start_up", "second_start_up", "third_start_up", "fourth_start_up"]
  .map(n => `/rent-it-solution/popups/startup/${n}.webp`);

const restaurant = ["first_restaurant", "second_restaurant", "third_restaurant", "fourth_restaurant"]
  .map(n => `/rent-it-solution/popups/restaurant/${n}.webp`);

export const rentItPopups: RentItPopupInfoType[] = [
  {
    id: "lokal", // business
    who: "rentIt.popup.lokal.who",
    includes: [
      "rentIt.popup.lokal.includes.1",
      "rentIt.popup.lokal.includes.2",
      "rentIt.popup.lokal.includes.3",
      "rentIt.popup.lokal.includes.4",
      "rentIt.popup.lokal.includes.5"
    ],
    style: "rentIt.popup.lokal.style",
    feature: "rentIt.popup.lokal.feature",
    results: [
      "rentIt.popup.lokal.results.1",
      "rentIt.popup.lokal.results.2",
      "rentIt.popup.lokal.results.3",
      "rentIt.popup.lokal.results.4"
    ],
    pictures: biz
  },
  {
    id: "mvp-one", // startup
    who: "rentIt.popup.mvp-one.who",
    includes: [
      "rentIt.popup.mvp-one.includes.1",
      "rentIt.popup.mvp-one.includes.2",
      "rentIt.popup.mvp-one.includes.3",
      "rentIt.popup.mvp-one.includes.4",
      "rentIt.popup.mvp-one.includes.5"
    ],
    style: "rentIt.popup.mvp-one.style",
    feature: "rentIt.popup.mvp-one.feature",
    results: [
      "rentIt.popup.mvp-one.results.1",
      "rentIt.popup.mvp-one.results.2",
      "rentIt.popup.mvp-one.results.3"
    ],
    pictures: startup
  },
  {
    id: "menu", // restaurant
    who: "rentIt.popup.menu.who",
    includes: [
      "rentIt.popup.menu.includes.1",
      "rentIt.popup.menu.includes.2",
      "rentIt.popup.menu.includes.3",
      "rentIt.popup.menu.includes.4",
      "rentIt.popup.menu.includes.5"
    ],
    style: "rentIt.popup.menu.style",
    feature: "rentIt.popup.menu.feature",
    results: [
      "rentIt.popup.menu.results.1",
      "rentIt.popup.menu.results.2",
      "rentIt.popup.menu.results.3"
    ],
    pictures: restaurant
  }
];

export default rentItPopups;
