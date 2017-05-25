using System.Collections.Generic;
using System.Linq;
using System.Data;
using Infrastructure.WebApi.Dto;
using Infrastructure.Orm.Entities;
using System;

namespace Infrastructure.WebApi.FakeReadingServices.Impl
{
  public class FakeDataService : IFakeDataService
  {
        Students std = new Students();
        Specialty sp = new Specialty();
        
    public IEnumerable<StudentDto> GetStudentsByFilter(StudentFilterDto filter)
    {
      return fakeStudents.Where(
        s => (string.IsNullOrWhiteSpace(filter.Surname) || s.Surname.ToLower().StartsWith(filter.Surname.ToLower())) &&
             (!filter.SpecialityId.HasValue || s.Priorities.Any(p => p.SpecialityId == filter.SpecialityId)));
    }

    public IEnumerable<SpecialityDto> GetAllSpecialities()
    {
      return fakeSpecialities;
    }

    public FakeDataService()
    {
    fakeStudents = new List<StudentDto>(){};
    DataTable studDT = std.StudentSelect(1);
    foreach(DataRow dr in studDT.Rows)
    {    
        DataTable studSpec = std.StudentSelect(1, dr["FirstName"].ToString(), dr["Surname"].ToString(), dr["MiddleName"].ToString());
        fakeStudents.Add(new StudentDto()
        {
            Surname = studSpec.Rows[0]["Surname"].ToString(),
            FirstName = studSpec.Rows[0]["FirstName"].ToString(),
            MiddleName = studSpec.Rows[0]["MiddleName"].ToString(),
            Score = Convert.ToInt32(studSpec.Rows[0]["Score"].ToString()),
            Priorities = new List<PriorityDto>()
            {
                new PriorityDto()
                {
                    Order = Convert.ToInt32(studSpec.Rows[0]["Orderr"].ToString()),
                    SpecialityId = Convert.ToInt32(studSpec.Rows[0]["SpecialtyID"].ToString())
                },
                new PriorityDto()
                {
                    Order = Convert.ToInt32(studSpec.Rows[1]["Orderr"].ToString()),
                    SpecialityId = Convert.ToInt32(studSpec.Rows[1]["SpecialtyID"].ToString())
                },
                new PriorityDto()
                {
                    Order = Convert.ToInt32(studSpec.Rows[2]["Orderr"].ToString()),
                    SpecialityId = Convert.ToInt32(studSpec.Rows[2]["SpecialtyID"].ToString())
                }
            }
        });
        //foreach(DataRow datR in studSpec.Rows)
        //{
        //    new PriorityDto()
        //    {
        //        Order = Convert.ToInt32(datR["Order"].ToString()),
        //        SpecialityId = Convert.ToInt32(datR["SpecialtyID"].ToString())
        //    };
        //}
    }
    DataTable specDT = sp.SpecialtySelect();
    fakeSpecialities = new List<SpecialityDto>(){};
    foreach(DataRow dr in specDT.Rows)
    {
        fakeSpecialities.Add(
            new SpecialityDto()
            {
                Id = Convert.ToInt32(dr["ID"].ToString()),
                BudgetPlacesCount = Convert.ToInt32(dr["Count"].ToString()),
                Name = dr["Name"].ToString()
            });
    }
    }

    private List<StudentDto> fakeStudents;
    private List<SpecialityDto> fakeSpecialities;
  }
}
