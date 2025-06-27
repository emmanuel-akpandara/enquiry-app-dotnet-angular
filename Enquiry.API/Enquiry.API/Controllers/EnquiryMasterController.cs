using Enquiry.API.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Enquiry.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("allowCors")]
    public class EnquiryMasterController : ControllerBase
    {
        private readonly EnquiryDbContext _context;

        public EnquiryMasterController(EnquiryDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllStatus")]
        public List<EnquiryStatus> GetEnquiryStatuses()
        {
            var list = _context.EnquiryStatus.ToList();
            return list;
        }

        [HttpGet("GetAllTypes")]
        public List<EnquiryType> GetAllTypes()
        {
            var list = _context.EnquiryType.ToList();
            return list;
        }

        [HttpGet("GetAllEnquiries")]
        public List<EnquiryModel> GetAllEnquiries()
        {
            var list = _context.EnquiryModel.ToList();
            return list;
        }

        [HttpPost("CreateNewEnquiry")]
        public EnquiryModel AddNewEnquiry(EnquiryModel obj)
            {
            obj.CreatedDate = DateTime.Now;
            _context.EnquiryModel.Add(obj);
            _context.SaveChanges();
            return obj;
        }

        [HttpPost("UpdateEnquiry")]
        public EnquiryModel Update(EnquiryModel obj)
        {
            var record = _context.EnquiryModel.SingleOrDefault(m => m.EnquiryId == obj.EnquiryId);
            if (record != null) {
                record.Resolution = obj.Resolution;
                record.EnquiryStatusId = obj.EnquiryStatusId;
                _context.SaveChanges();
            }
            return obj;
        }
        [HttpDelete("DeleteEnquiryById")]
        public bool DeleteEnquiryById(int id) { 
            var record = _context.EnquiryModel.SingleOrDefault(m=>m.EnquiryId == id);
            if (record != null) { 
                _context.EnquiryModel.Remove(record);
                _context.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
