

export const CalendarEvent = ({event}) => {
    // console.log(event);
    const {title, user} = event;

    
  return (
    <>
        <span>{title}</span>
        <br />
        <span> - {user.name} - {user.email}</span>
        
    </>
  )
}
