const AdminBro = require("admin-bro");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3030;

const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");

AdminBro.registerAdapter(AdminBroMongoose);

const IHSData = require("./model/IHSData");
const Filter = require("./model/Filter");
const SiteInfo = require("./model/SiteInfo");
const RegionInfo = require("./model/RegionInfo");
const Service = require("./model/Service");
const Property = require("./model/Property");
const User = require("./model/User");
const Request = require("./model/Request");

const ihsNavigation = {
  name: "IHSData",
  icon: "Accessibility",
};

const atcNavigation = {
  name: "ATCData",
  icon: "Accessibility",
};

const AdminBroOptions = {
  rootPath: "/",
  branding: {
    companyName: "Amazing C.O.",
  },
  resources: [
    { resource: IHSData, options: { navigation: ihsNavigation } },
    { resource: Filter, options: { navigation: atcNavigation } },
    { resource: SiteInfo, options: { navigation: atcNavigation } },
    { resource: RegionInfo, options: { navigation: atcNavigation } },
    Request,
    Service,
    Property,
    User,
  ],
  locale: {
    translations: {
      labels: {
        IHSData: "IHS Data",
      },
    },
  },
};

const run = async () => {
  const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  //Connect to Database
  mongoose
    .connect(process.env.MONGO_URL || "mongodb://localhost/grey-test", option)
    .then(() => console.log("MongoDb Connected..."))
    .catch((err) => console.log(err));
};
run();

const adminBro = new AdminBro(AdminBroOptions);

const router = AdminBroExpress.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router);
app.listen(PORT, () => console.log(`AdminBro is under ${PORT}`));
