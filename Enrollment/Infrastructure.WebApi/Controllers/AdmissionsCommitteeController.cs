using System;
using Infrastructure.WebApi.Dto;
using Infrastructure.WebApi.FakeReadingServices;
using Microsoft.AspNetCore.Mvc;

namespace Infrastructure.WebApi.Controllers
{
  [Route("api/[controller]")]
  public class AdmissionsCommitteeController : Controller
  {
    private readonly IFakeDataService _fakeDataService;

    public AdmissionsCommitteeController(IFakeDataService fakeDataService)
    {
      _fakeDataService = fakeDataService;
    }

    [HttpGet("getFilteredStudents")]
    public IActionResult GetStudentsByFilter(string surname, int specialityId)
    {
      try
      {
        var filter = new StudentFilterDto()
        {
          SpecialityId = specialityId,
          Surname = surname
        };

        var filteredStudents = _fakeDataService.GetStudentsByFilter(filter);
        return Ok(filteredStudents);
      }
      catch (Exception e)
      {
        //log error
        return BadRequest("Some error, try again");
      }
    }

    [HttpGet("getAllSpecialities")]
    public IActionResult GetAllSpecialities()
    {
      try
      {
        return Ok(_fakeDataService.GetAllSpecialities());
      }
      catch (Exception e)
      {
        //log error
        return BadRequest("Some error, try again " + e.ToString());
      }
    }

  }
}
