import Pray from "../model/pray.js";

export const sentPray = async (req, res) => {
   
    try {
        const sentmessage = await Pray.create(req.body)
        if (!sentmessage) {
            return res.status(400).json({
                message: 'KHông thể gửi thành công'
            })

        }
        res.status(200).json(sentmessage)
    } catch (error) {
        return res.status(400).json(error)
    }
}
 
export const getPray = async (req, res) => { 
    try {
        const { _page = 1, _limit = 10, _sort = "createdAt", _order = "asc", _embed } = req.query;
    const options = {
        page: _page,
        limit: _limit,
        sort: { _sort : _order === "desc" ? -1 : 1 },
        };
        const results = await Pray.paginate({  }, options)
        console.log(results);
        
        return res.status(200).json({
            data: results.docs,
            pagination: {
                currentPage: results.page,
                totalPages: results.totalPages,
                totalItems: results.totalItems
            }
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}