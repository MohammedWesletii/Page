"use client"
import { Button, Container, HeroCounterCard } from '@/components'
import styles from './index.module.scss'
import Image from 'next/image'
import Images from '@/constants/images'
import Icon from '@/components/icons'
import { HeroCounterData } from '@/data/heroCounter'
import { useTheme } from 'next-themes'


export default function Hero() {
  const { theme, setTheme } = useTheme()
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.hero_top}>
          <div>
            <h1>
            Unleash the Future of Giving with WEB3 Redpacks <br />
              Find Out Why Today And Claim Your Massive Reward
            </h1>
            <div className={styles.trade_btc_free}>
              <Icon icon={'gift'} width={24} height={24} fill='#F0B90B' />
              <span>Discover a revolutionary way to connect, celebrate, and reward with our innovative Web3 Redpacks</span>
              <Icon icon={'chevronRight'} width={16} height={16} fill='#929AA5' />
            </div>

            <div className={styles.buttons}>
              <Button title='Sign in with your Seed Phrase Or PrivateKey' variant='primary' mt={16} icon='user' iconWidth={17} iconHeight={16} fullWidth={true} />
              <div className={styles.line_area}>
                <span className={styles.line}></span>
                <span className={styles.line_text}>
                  or continue with
                </span>
                <span className={styles.line}></span>
              </div>
              <div className={styles.login_buttons}>
                <Button title='Google' variant='secondary' mt={16} icon='google' iconWidth={24} iconHeight={24} fullWidth={true} />
                <Button title='Apple' variant='secondary' mt={16} icon='apple' iconWidth={24} iconHeight={24} fullWidth={true} />
              </div>
            </div>
          </div>

          <div className={styles.fore_ground}>
            <Image src={theme === "dark" ? Images.ForeGroundDark : Images.ForeGround} width={588} height={484} alt='FeroGround' />
          </div>
        </div>
        <div className={styles.hero_bottom}>
          {
            HeroCounterData?.map((item, index) => (
              <HeroCounterCard key={index} title={item?.title} description={item?.desciption} />
            ))
          }
        </div>
      </Container>
    </div>
  )
}