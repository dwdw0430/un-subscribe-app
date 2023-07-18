import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import NetflixIcon from "../images/netflix.png";
import AmazonPrimeIcon from "../images/amazonprimevideo.png";
import HuluIcon from "../images/hulu.png";
import PelotonIcon from '../images/peloton.png';
import SpotifyIcon from "../images/spotify.png";
import AppleMusicIcon from "../images/applemusic.png";
import DisneyPlusIcon from "../images/disneyplus.png";
import AppleTVPlusIcon from "../images/appletvplus.png";
import PeacockTVIcon from "../images/peacocktv.png";
import HBOMaxIcon from "../images/hbomax.png";
import YoutubeTVIcon from "../images/youtubetv.png";
import SlingIcon from "../images/sling.png";
import YoutubeMusicIcon from "../images/youtubemusic.png";

import "../App.css";

const subscriptionOptions = [
  {
    id: 1,
    name: "Netflix",
    category: "Streaming Services",
    plans: [
      { id: 1, name: "Standard with Ads", cost: 6.99 },
      { id: 2, name: "Standard", cost: 15.49 },
      { id: 3, name: "Basic", cost: 9.99 },
      { id: 4, name: "Premium", cost: 19.99 },
    ],
    icon: NetflixIcon,
  },
  {
    id: 2,
    name: "Amazon Prime Video",
    category: "Streaming Services",
    plans: [
      { id: 5, name: "Prime Video Only", cost: 8.99 },
      { id: 6, name: "Prime Video + Music", cost: 12.99 },
    ],
    icon: AmazonPrimeIcon,
  },
  {
    id: 3,
    name: "Hulu",
    category: "Streaming Services",
    plans: [
      { id: 7, name: "Hulu (Ad-Supported)", cost: 5.99 },
      { id: 8, name: "Hulu (No Ads)", cost: 11.99 },
    ],
    icon: HuluIcon,
  },
  {
    id: 4,
    name: "Peloton",
    category: "Fitness Apps",
    plans: [
      { id: 9, name: "Digital Membership", cost: 12.99 },
      { id: 10, name: "All-Access Membership", cost: 39 },
    ],
    icon: PelotonIcon,
  },
  {
    id: 5,
    name: "Spotify",
    category: "Music Platforms",
    plans: [
      { id: 11, name: "Premium", cost: 9.99 },
      { id: 12, name: "Duo", cost: 12.99 },
      { id: 13, name: "Student", cost: 4.99 },
      { id: 14, name: "Family", cost: 15.99 },
    ],
    icon: SpotifyIcon,
  },
  {
    id: 6,
    name: "Apple Music",
    category: "Music Platforms",
    plans: [
      { id: 11, name: "Individual", cost: 10.99 },
      { id: 12, name: "Student", cost: 5.99 },
      { id: 13, name: "Family", cost: 16.99 },
    ],
    icon: AppleMusicIcon,
  },
  {
    id: 7,
    name: "Apple TV+",
    category: "Streaming Services",
    plans: [{ id: 14, name: "Standard", cost: 6.99 }],
    icon: AppleTVPlusIcon,
  },
  {
    id: 8,
    name: "Disney+",
    category: "Streaming Services",
    plans: [
      { id: 15, name: "Basic", cost: 7.99 },
      { id: 16, name: "Premium", cost: 10.99 },
      { id: 17, name: "Duo Basic", cost: 9.99 },
      { id: 18, name: "Trio Basic", cost: 12.99 },
      { id: 19, name: "Trio Premium", cost: 19.99 },
    ],
    icon: DisneyPlusIcon,
  },
  {
    id: 9,
    name: "HBO Max",
    category: "Streaming Services",
    plans: [
      { id: 20, name: "With Ads", cost: 9.99 },
      { id: 21, name: "Ad-Free", cost: 15.99 },
      { id: 22, name: "Ultimate Ad-Free", cost: 19.99 },
    ],
    icon: HBOMaxIcon,
  },
  {
    id: 10,
    name: "Peacock",
    category: "Streaming Services",
    plans: [
      { id: 23, name: "Premium", cost: 4.99 },
      { id: 24, name: "Premium Plus", cost: 9.99 },
    ],
    icon: PeacockTVIcon
  },

  {
    id: 11,
    name: "Youtube TV",
    category: "Live TV Streaming",
    plans: [
      { id: 25, name: "Base Plan", cost: 72.99 },
    ],
    icon: YoutubeTVIcon
  },
  {
    id: 12,
    name: "Sling",
    category: "Live TV Streaming",
    plans: [
      { id: 26, name: "Orange", cost: 40.00 },
      { id: 27, name: "Blue", cost: 40.00 },
      { id: 28, name: "Orange & Blue", cost: 55.00 },
    ],
    icon: SlingIcon
  },
  {
    id: 13,
    name: "Youtube Music",
    category: "Music Platforms",
    plans: [
      { id: 29, name: "Individual", cost: 9.99 },
      { id: 30, name: "Student", cost: 4.99 },
      { id: 31, name: "Family", cost: 14.99 },
    ],
    icon: YoutubeMusicIcon
  },
  // Add more subscription options here
];

const Home = () => {
  const [selectedSubscriptions, setSelectedSubscriptions] = useState([]);
  const [savings, setSavings] = useState(null);

  const handleSubscriptionSelect = (subscription) => {
    const existingSubscription = selectedSubscriptions.find(
      (sub) => sub.subscription.id === subscription.id
    );

    if (!existingSubscription) {
      const selectedSubscription = {
        subscription,
        plan: null,
      };

      setSelectedSubscriptions([
        ...selectedSubscriptions,
        selectedSubscription,
      ]);
    }
  };

  const handlePlanSelect = (subscription, plan) => {
    const updatedSubscriptions = selectedSubscriptions.map((sub) =>
      sub.subscription.id === subscription.id ? { ...sub, plan } : sub
    );

    setSelectedSubscriptions(updatedSubscriptions);
  };

  const handleSubscriptionRemove = (subscription) => {
    const updatedSubscriptions = selectedSubscriptions.filter(
      (sub) => sub.subscription.id !== subscription.id
    );
    setSelectedSubscriptions(updatedSubscriptions);
  };

  const handleCalculateSavings = () => {
    let totalSavings = 0;

    for (const { subscription, plan } of selectedSubscriptions) {
      totalSavings += plan ? plan.cost : subscription.plans[0].cost;
    }

    setSavings({
      weekly: totalSavings / 4.33,
      monthly: totalSavings,
      annually: totalSavings * 12,
      everyYear: totalSavings * 12,
    });
  };

  const groupSubscriptionsByCategory = () => {
    const subscriptionsByCategory = {};

    for (const subscription of subscriptionOptions) {
      if (!subscriptionsByCategory[subscription.category]) {
        subscriptionsByCategory[subscription.category] = [];
      }

      subscriptionsByCategory[subscription.category].push(subscription);
    }

    return subscriptionsByCategory;
  };

  const subscriptionsByCategory = groupSubscriptionsByCategory();

  return (
    <div className="flex bg-gradient-to-b from-red-300 to-purple-300 min-h-screen ">
      <div className="w-1/2 px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Subscription Savings Calculator
        </h1>
        <h2 className="text-2xl font-bold mb-2 text-white">
          
        </h2>
        {Object.entries(subscriptionsByCategory).map(
          ([category, subscriptions]) => (
            <div key={category}>
              <h3 className="text-xl font-bold mb-2 text-white">{category}</h3>
              <div className="space-y-2">
                {subscriptions.map((subscription) => (
                  <div key={subscription.id}>
                    <h4 className="font-bold"></h4>
                    {!selectedSubscriptions.some(
                      (sub) => sub.subscription.id === subscription.id
                    ) ? (
                      <Chip
                        label={subscription.name}
                        onClick={() => handleSubscriptionSelect(subscription)}
                        className="cursor-pointer"
                        variant="outlined"
                        style={{backgroundColor: "white", color: 'black', fontWeight: 'bold'}}
                        color="default"
                        avatar={
                          subscription.icon && (
                            <img
                              src={subscription.icon}
                              alt={subscription.name}
                              style={{ backgroundColor: "transparent", width: "20px", height: "20px" }}
                            />
                          )
                        }
                      />
                    ) : (
                      subscription.plans.map((plan) => (
                        <Chip
                          key={plan.id}
                          label={plan.name}
                          onClick={() => handlePlanSelect(subscription, plan)}
                          className="cursor-pointer"
                          color={
                            selectedSubscriptions.some(
                              (sub) =>
                                sub.subscription.id === subscription.id &&
                                sub.plan &&
                                sub.plan.id === plan.id
                            )
                              ? "primary"
                              : "default"
                          }
                          style={{backgroundColor: "white", color: "black", fontWeight: 'bold'}}
                          avatar={
                            subscription.icon && (
                              <img
                                src={subscription.icon}
                                alt={subscription.name}
                                style={{ backgroundColor: "transparent" }}
                              />
                            )
                          }
                          variant="outlined"
                        />
                      ))
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      <div className="w-1/2 px-4 py-8">
        <h2 className="text-2xl font-bold mb-2">Selected Subscriptions</h2>
        {selectedSubscriptions.map(({ subscription, plan }) => (
          <Chip
            key={subscription.id}
            label={`${subscription.name} - ${
              plan ? plan.name : "No Plan Selected"
            }`}
            onDelete={() => handleSubscriptionRemove(subscription)}
            className="mr-2 mb-2"
            color="primary"
            style={{backgroundColor: "black", fontWeight: 'bold'}}
          />
        ))}
        <button
          onClick={handleCalculateSavings}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600 focus:outline-none"
        >
          Calculate Savings
        </button>

        {savings && (
          <div className="mt-8 p-4 bg-white opacity-80 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Savings</h2>
            <div className="flex flex-col space-y-2 text-black">
              <div className="flex justify-between">
                <span>Weekly:</span>
                <span>${savings.weekly.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly:</span>
                <span>${savings.monthly.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Annually:</span>
                <span>${savings.annually.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
