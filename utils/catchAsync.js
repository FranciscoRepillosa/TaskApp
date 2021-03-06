const catchAsync = fn => {
    return (req, res, next) => {
      fn(req, res, next).catch(err => res.send(err))
    }
  };

module.exports = catchAsync;