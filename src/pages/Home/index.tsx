import React from "react";
import './../../global.scss'
import PageTitle from "../../components/PageTitle";
import {TweetForm} from "../../components/TweetForm";

interface IHome {
  title: string
}

export const Home: React.FC<IHome> = ({title}) => {

  return (
    <div className={'container'}>
      <div className={'middleContainer'}>
        <PageTitle title={title}/>
        <TweetForm/>

      </div>
      <div className={'rightContainer'}>RIGHT COLUMN</div>
    </div>
  );
};
