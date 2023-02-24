 function MyAlert(title,status,toast){
  return (
    toast({
        title:title,
        status: status,
        duration: 9000,
        isClosable: true,
      })
  )
}
export default MyAlert;