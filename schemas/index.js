import mongoose from "mongoose";
import { genSalt, hash } from "bcryptjs";
const { Schema } = mongoose;

export const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ details: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

// Hashing passwords
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  //Hashing passwords
  genSalt(8, (error, salt) => {
    if (error) return next(error);

    hash(this.password, salt, (e, hash) => {
      if (e) return next(e);

      this.password = hash;
      return next();
    });
  });
});

export const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    containsEgg: { type: Boolean, required: true },
    category: { type: String, required: true },
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
    price: { type: Number, default: 150, required: true },
    addOns: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
      },
    ],
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurants",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ReviewSchema = new Schema(
  {
    food: { type: mongoose.Types.ObjectId, ref: "Foods" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "Restaurants" },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    isRestaurantReview: Boolean,
    isFoodReview: Boolean,
    photos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Images",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const RestaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mapLocation: { type: String, required: true },
    cuisine: [String],
    restaurantTiming: {
      type: String,
      required: true,
    },
    contactNumber: { type: Number, required: true },
    website: {
      type: String,
    },
    popularDishes: [String],
    averageCost: Number,
    amenities: [String],
    menuImages: {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
    menu: {
      type: mongoose.Types.ObjectId,
      ref: "Menus",
    },
    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "Reviews",
    },
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const OrderSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    orderDetails: [
      {
        food: {
          type: mongoose.Types.ObjectId,
          ref: "Foods",
        },
        quantity: {
          type: Number,
          required: true,
        },
        paymentMode: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          default: "Placed",
        },
        paymentDetails: {
          itemTotal: {
            type: Number,
          },
          promo: {
            type: Number,
            required: true,
            tax: { type: Number, required: true },
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const MenuSchema = new Schema(
  {
    menu: [
      {
        name: { type: String, required: true },
        items: [
          {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
          },
        ],
      },
    ],
    recommended: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ImageSchema = new Schema(
  {
    images: [
      {
        location: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);
