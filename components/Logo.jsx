import Image from 'next/image'

const Logo = () => {
  return (
    <div style={styles.container}>
      <Image 
        src="/logo.png" 
        alt="Logo"
        width={240} 
        height={140} 
      />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '240px',
    width: 'auto',
    top: '60px',
  }
}

export default Logo;
