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
        Specialty spec = new Specialty();
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
            fakeStudents = new List<StudentDto>() { };
            DataTable studDT = std.StudentSelect(1);
            int ID = 0, rowIndex = 0;
            foreach (DataRow dr in studDT.Rows)
            {
                if (ID != Convert.ToInt32(dr["ID"].ToString()))
                {
                    ID = Convert.ToInt32(dr["ID"].ToString());
                    rowIndex = studDT.Rows.IndexOf(dr);
                    fakeStudents.Add(new StudentDto()
                    {
                        Surname = dr["Surname"].ToString(),
                        FirstName = dr["FirstName"].ToString(),
                        MiddleName = dr["MiddleName"].ToString(),
                        Score = Convert.ToInt32(dr["Score"].ToString()),
                        Priorities = new List<PriorityDto>()
                {
                    new PriorityDto()
                    {
                        Order = Convert.ToInt32(studDT.Rows[rowIndex]["Orderr"].ToString()),
                        SpecialityId = Convert.ToInt32(studDT.Rows[rowIndex]["SpecID"].ToString())
                    },
                    new PriorityDto()
                    {
                        Order = Convert.ToInt32(studDT.Rows[rowIndex+1]["Orderr"].ToString()),
                        SpecialityId = Convert.ToInt32(studDT.Rows[rowIndex+1]["SpecID"].ToString())
                    },
                    new PriorityDto()
                    {
                        Order = Convert.ToInt32(studDT.Rows[rowIndex+2]["Orderr"].ToString()),
                        SpecialityId = Convert.ToInt32(studDT.Rows[rowIndex+2]["SpecID"].ToString())
                    }
                }
                    });
                }
                //foreach(DataRow datR in studSpec.Rows)
                //{
                //    new PriorityDto()
                //    {
                //        Order = Convert.ToInt32(datR["Order"].ToString()),
                //        SpecialityId = Convert.ToInt32(datR["SpecialtyID"].ToString())
                //    };
                //}
            }
            DataTable specDT = spec.SpecialtySelect();
            fakeSpecialities = new List<SpecialityDto>() { };
            foreach (DataRow dr in specDT.Rows)
            {
                fakeSpecialities.Add(
                    new SpecialityDto()
                    {
                        Id = Convert.ToInt32(dr["specID"].ToString()),
                        BudgetPlacesCount = Convert.ToInt32(dr["specCount"].ToString()),
                        Name = dr["specName"].ToString()
                    });
            }
        }

        private List<StudentDto> fakeStudents;
        private List<SpecialityDto> fakeSpecialities;
    }
}
