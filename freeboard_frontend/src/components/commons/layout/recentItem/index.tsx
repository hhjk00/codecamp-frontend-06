import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      images
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 155px;
  height: 373px;
  right: 12%;
  top: 809px;
  border: 1px solid #000000;
  background: #ffffff;
  padding: 20px;
  overflow: hidden;
  font-family: "myFont";
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  padding-bottom: 5px;
`;

const Image = styled.img`
  width: 95px;
  height: 95px;
  border: 1px solid;
  margin-top: 5px;
`;

export default function RecentItem() {
  const [RecentItems, setRecentItems] = useState([]);

  useEffect(() => {
    const recent = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );
    setRecentItems(recent);
  }, []);
  // console.log(RecentItems[0]?.images[0]);

  return (
    <Wrapper>
      <Text>오늘 본 상품</Text>
      {/* 
      {RecentItems.map((el) => (
        <Image
          key={el._id}
          src={`https://storage.googleapis.com/${el.images[0]}`}
        />
      ))} */}

      {RecentItems[RecentItems.length - 1]?.images[0] ? (
        <Image
          src={`https://storage.googleapis.com/${
            RecentItems[RecentItems.length - 1]?.images[0]
          }`}
        />
      ) : (
        <Image
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAY1BMVEX///+VlZWPj4/j4+O0tLT7+/ucnJyfn5/b29uSkpKkpKSrq6uurq7m5uZmZmaWlpbz8/OIiIjs7Ox5eXlkZGRsbGzNzc2BgYF0dHTU1NRvb2+7u7ve3t7w8PDCwsKKiopcXFxuhZvhAAAELklEQVR4nO3b25KiOhQG4HBIICgHUQgg6rz/U85Kgt3OlNDs6mrdrPm/Kwtzwc9KApIoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAU3LBu8/tR8k23i2IW77xcxXqRaGq332OPyRSOviCVjwrX5dfRg+CsH33af6Eqerhc/fLouN3n+cPqF10rdvombzVfLNHrsNrlT//ulZ8s+e+6uVM9Ivi2+f9NDcbfaq65pjdT3PzHX4aD2fNL/uUTc91+MR3+HEM2WX301yQzDyyTVcmyEXKLns+DeY2f353m2bBUYieW/aPpzk981TjZzmKzq7u9dfP8KSMbFtu2Xdrogepa8ssexU+Sfr35QhH35hZ9shnV3N89sg35ph94Xep+wkT+i7PMnu50KBknj1ZaJDpz+zM7u/IvtCAeXb9D2dfXfd/ea5D9pec1ysg+0IDZPefMc+/5LxeAdkXGjxmb3m9o/4vz3W5vU7Msq+su1/AYLQGvT77/TU9n70Hq7N/sU67RWuz31fnGUVfmX2sta86q51Gq7Lra+KjRy87r1dYlT3wVQ9YVX1t9oDbNOeszs5rmnP8usxCg/JedWYdXny9LtP7suuS1zTn+LprtX9OhVN0flX/XIed2Tt87/AMqy4e5vF5DKc5776JaiE6u5vbh3r30b21fYjRbgB8bEDQesdxrN9d8iWckwMAAAAAAAAA/A/FqqyEONtliTExJptez1S7sxBXpXr6nCfKbTDJy+lvg73yDa/u7ySbfYsng6GhfOpE0bpuv+tM5Y5XByVF3DQZfW6bQdtj16Zxixd9YeJsuFX0vUo2nF2Ux+NOiISyx4P9y+Pg12Z89uFg6HPSGbdaVQadvRSyPF7oQpxSERfVG8/8+8qbogra7MqWPD/6/VNT9uxIXdvog627NLE2969ESn0gLi5vPffvKsNrEz1m37vDU5+/dqkQp7PLHnXpeaCwl8N9vXbz2W91Ec9mT81VpMVobPb2mPd2bnjMHlWXarsbrsqbMLe57EUdKnE1tcu+M1XenX32KI7jiMbEsevMdl/clzdJPTmbyV7tjcxK6bLfSn/UZu/DQ0HjvWn7vt9y3eU49LPZWyp9LGx2WVDNE2rj+rzsCwZz3U1Wh11STNnrP7NfquLc9S572jSnU9Pk03hPeWQXmQkKW1MauWP3eI8rLtIc6CZus8cDdXCa+UV1CyWX7BU9uJnCPrZdhcjsTC4+s4tk6IQb7+pAiauCap4N1KZ12Wmev2x2vMuQerpsml+USzfD0CQ+SmVKKfa/anp+S4Q8hjQY3J2tM1LUxjakobAvGhoI291QHdn/84+p3SFd9efzOFVRjhEN/lSKKrUjIRIydfeyiA6JCzXsc7oIqbXt51oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+K7fw2lApeR5FTgAAAAASUVORK5CYII="
          }
        />
      )}
      {RecentItems[RecentItems.length - 2]?.images[0] ? (
        <Image
          src={`https://storage.googleapis.com/${
            RecentItems[RecentItems.length - 2]?.images[0]
          }`}
        />
      ) : (
        <Image
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAY1BMVEX///+VlZWPj4/j4+O0tLT7+/ucnJyfn5/b29uSkpKkpKSrq6uurq7m5uZmZmaWlpbz8/OIiIjs7Ox5eXlkZGRsbGzNzc2BgYF0dHTU1NRvb2+7u7ve3t7w8PDCwsKKiopcXFxuhZvhAAAELklEQVR4nO3b25KiOhQG4HBIICgHUQgg6rz/U85Kgt3OlNDs6mrdrPm/Kwtzwc9KApIoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAU3LBu8/tR8k23i2IW77xcxXqRaGq332OPyRSOviCVjwrX5dfRg+CsH33af6Eqerhc/fLouN3n+cPqF10rdvombzVfLNHrsNrlT//ulZ8s+e+6uVM9Ivi2+f9NDcbfaq65pjdT3PzHX4aD2fNL/uUTc91+MR3+HEM2WX301yQzDyyTVcmyEXKLns+DeY2f353m2bBUYieW/aPpzk981TjZzmKzq7u9dfP8KSMbFtu2Xdrogepa8ssexU+Sfr35QhH35hZ9shnV3N89sg35ph94Xep+wkT+i7PMnu50KBknj1ZaJDpz+zM7u/IvtCAeXb9D2dfXfd/ea5D9pec1ysg+0IDZPefMc+/5LxeAdkXGjxmb3m9o/4vz3W5vU7Msq+su1/AYLQGvT77/TU9n70Hq7N/sU67RWuz31fnGUVfmX2sta86q51Gq7Lra+KjRy87r1dYlT3wVQ9YVX1t9oDbNOeszs5rmnP8usxCg/JedWYdXny9LtP7suuS1zTn+LprtX9OhVN0flX/XIed2Tt87/AMqy4e5vF5DKc5776JaiE6u5vbh3r30b21fYjRbgB8bEDQesdxrN9d8iWckwMAAAAAAAAA/A/FqqyEONtliTExJptez1S7sxBXpXr6nCfKbTDJy+lvg73yDa/u7ySbfYsng6GhfOpE0bpuv+tM5Y5XByVF3DQZfW6bQdtj16Zxixd9YeJsuFX0vUo2nF2Ux+NOiISyx4P9y+Pg12Z89uFg6HPSGbdaVQadvRSyPF7oQpxSERfVG8/8+8qbogra7MqWPD/6/VNT9uxIXdvog627NLE2969ESn0gLi5vPffvKsNrEz1m37vDU5+/dqkQp7PLHnXpeaCwl8N9vXbz2W91Ec9mT81VpMVobPb2mPd2bnjMHlWXarsbrsqbMLe57EUdKnE1tcu+M1XenX32KI7jiMbEsevMdl/clzdJPTmbyV7tjcxK6bLfSn/UZu/DQ0HjvWn7vt9y3eU49LPZWyp9LGx2WVDNE2rj+rzsCwZz3U1Wh11STNnrP7NfquLc9S572jSnU9Pk03hPeWQXmQkKW1MauWP3eI8rLtIc6CZus8cDdXCa+UV1CyWX7BU9uJnCPrZdhcjsTC4+s4tk6IQb7+pAiauCap4N1KZ12Wmev2x2vMuQerpsml+USzfD0CQ+SmVKKfa/anp+S4Q8hjQY3J2tM1LUxjakobAvGhoI291QHdn/84+p3SFd9efzOFVRjhEN/lSKKrUjIRIydfeyiA6JCzXsc7oIqbXt51oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+K7fw2lApeR5FTgAAAAASUVORK5CYII="
          }
        />
      )}

      {RecentItems[RecentItems.length - 3]?.images[0] ? (
        <Image
          src={`https://storage.googleapis.com/${
            RecentItems[RecentItems.length - 3]?.images[0]
          }`}
        />
      ) : (
        <Image
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAY1BMVEX///+VlZWPj4/j4+O0tLT7+/ucnJyfn5/b29uSkpKkpKSrq6uurq7m5uZmZmaWlpbz8/OIiIjs7Ox5eXlkZGRsbGzNzc2BgYF0dHTU1NRvb2+7u7ve3t7w8PDCwsKKiopcXFxuhZvhAAAELklEQVR4nO3b25KiOhQG4HBIICgHUQgg6rz/U85Kgt3OlNDs6mrdrPm/Kwtzwc9KApIoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAU3LBu8/tR8k23i2IW77xcxXqRaGq332OPyRSOviCVjwrX5dfRg+CsH33af6Eqerhc/fLouN3n+cPqF10rdvombzVfLNHrsNrlT//ulZ8s+e+6uVM9Ivi2+f9NDcbfaq65pjdT3PzHX4aD2fNL/uUTc91+MR3+HEM2WX301yQzDyyTVcmyEXKLns+DeY2f353m2bBUYieW/aPpzk981TjZzmKzq7u9dfP8KSMbFtu2Xdrogepa8ssexU+Sfr35QhH35hZ9shnV3N89sg35ph94Xep+wkT+i7PMnu50KBknj1ZaJDpz+zM7u/IvtCAeXb9D2dfXfd/ea5D9pec1ysg+0IDZPefMc+/5LxeAdkXGjxmb3m9o/4vz3W5vU7Msq+su1/AYLQGvT77/TU9n70Hq7N/sU67RWuz31fnGUVfmX2sta86q51Gq7Lra+KjRy87r1dYlT3wVQ9YVX1t9oDbNOeszs5rmnP8usxCg/JedWYdXny9LtP7suuS1zTn+LprtX9OhVN0flX/XIed2Tt87/AMqy4e5vF5DKc5776JaiE6u5vbh3r30b21fYjRbgB8bEDQesdxrN9d8iWckwMAAAAAAAAA/A/FqqyEONtliTExJptez1S7sxBXpXr6nCfKbTDJy+lvg73yDa/u7ySbfYsng6GhfOpE0bpuv+tM5Y5XByVF3DQZfW6bQdtj16Zxixd9YeJsuFX0vUo2nF2Ux+NOiISyx4P9y+Pg12Z89uFg6HPSGbdaVQadvRSyPF7oQpxSERfVG8/8+8qbogra7MqWPD/6/VNT9uxIXdvog627NLE2969ESn0gLi5vPffvKsNrEz1m37vDU5+/dqkQp7PLHnXpeaCwl8N9vXbz2W91Ec9mT81VpMVobPb2mPd2bnjMHlWXarsbrsqbMLe57EUdKnE1tcu+M1XenX32KI7jiMbEsevMdl/clzdJPTmbyV7tjcxK6bLfSn/UZu/DQ0HjvWn7vt9y3eU49LPZWyp9LGx2WVDNE2rj+rzsCwZz3U1Wh11STNnrP7NfquLc9S572jSnU9Pk03hPeWQXmQkKW1MauWP3eI8rLtIc6CZus8cDdXCa+UV1CyWX7BU9uJnCPrZdhcjsTC4+s4tk6IQb7+pAiauCap4N1KZ12Wmev2x2vMuQerpsml+USzfD0CQ+SmVKKfa/anp+S4Q8hjQY3J2tM1LUxjakobAvGhoI291QHdn/84+p3SFd9efzOFVRjhEN/lSKKrUjIRIydfeyiA6JCzXsc7oIqbXt51oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+K7fw2lApeR5FTgAAAAASUVORK5CYII="
          }
        />
      )}
    </Wrapper>
  );
}
