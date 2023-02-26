 function MyAlert(title,status,toast){
  return (
    toast({
        title:title,
        position: 'top',
        status: status,
        duration: 9000,
        isClosable: true,
      })
  )
}
export default MyAlert;