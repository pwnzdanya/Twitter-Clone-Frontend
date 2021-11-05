import styles from './TweetForm.module.scss'
import {MdOutlinePermMedia} from 'react-icons/md'
import {AiOutlineGif, AiOutlineSchedule} from 'react-icons/ai'
import {BiPoll} from 'react-icons/bi'
import {GrEmoji} from 'react-icons/gr'
import {useAppDispatch, useAppSelector} from "../../hooks";
import Button from "../UI/Button";
import Avatar from "../Avatar";
import './../../global.scss'
import AutoTextArea from "../UI/Textarea";

interface AddTweetFormProps {
}


export const TweetForm: React.FC<AddTweetFormProps> = () => {
  const currentUser = useAppSelector(state => state.auth.currentUser)
  const dispatch = useAppDispatch()


  const handleCreateTweet = () => {
  }
  return (
    <>

      <div className={styles.main}>
        <div className={`${styles.wrapper} borderBottom`}>
          <div className={styles.avatarWrapper}>
            <Avatar
              img={currentUser.avatar}
              medium
            />
          </div>
          <div className={styles.content}>
            <div className={`${styles.textAreaWrapper} borderBottom`}>
              <AutoTextArea placeholder={`What's happening?`}/>
            </div>
            <div className={styles.footer}>
              <ul>
                <li>
                  <button>
                    <MdOutlinePermMedia size={20}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <AiOutlineGif size={20}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <BiPoll size={20}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <GrEmoji size={20}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <AiOutlineSchedule size={20}
                    />
                  </button>
                </li>
              </ul>

              <Button
                main
                onClick={handleCreateTweet}
                className={styles.btn}
              >
                Tweet
              </Button>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};
