import {apiHelper} from "../utils/helper"

export default {
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  }
}