import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import styles from './user.less'
import CountUp from 'react-countup'
import { color } from '../../../utils'
const countUpProps = {
  start: 0,
  duration: 2.75,
  useEasing: true,
  useGrouping: true,
  separator: ',',
}

function User ({ avatar, name, email, recieve, accept }) {
  return (<div className={styles.user}>
    <div className={styles.header}>
      <div className={styles.headerinner}>
        <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
        <h5 className={styles.name}>{name}</h5>
        <p>{email}</p>
      </div>
    </div>
    <div className={styles.number}>
      <div className={styles.item}>
        <p>接受申请</p>
        <p style={{ color: color.green }}><CountUp
          end={recieve}
          prefix="+"
          {...countUpProps}
        /></p>
      </div>
      <div className={styles.item}>
        <p>发放许可</p>
        <p style={{ color: color.blue }}><CountUp
          end={accept}
          prefix="*"
          {...countUpProps}
        /></p>
      </div>
    </div>
    <div className={styles.footer}>
      <Button type="ghost" size="large">View Profile</Button>
    </div>
  </div>)
}

User.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  sales: PropTypes.number,
  sold: PropTypes.number,
}

export default User
