export const ChildArea = (props) => {
  const { open } = props
  return (
    <>
      {open ? (
        <div className="ChildArea">
          <h2>Child Comp</h2>
        </div>
      ) : null}
    </>
  )
}
