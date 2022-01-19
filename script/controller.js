class controller {
    constructor() {
        this.initialize();

    }
    initialize() {
        var bt;
        onload = () => {

            // Referencias aos BTN

            document.querySelector('.bt-000').onclick = () => digito('.bt-000');
            document.querySelector('.bt-001').onclick = () => digito('.bt-001');
            document.querySelector('.bt-002').onclick = () => digito('.bt-002');
            document.querySelector('.bt-003').onclick = () => digito('.bt-003');
            document.querySelector('.bt-004').onclick = () => digito('.bt-004');
            document.querySelector('.bt-005').onclick = () => digito('.bt-005');
            document.querySelector('.bt-006').onclick = () => digito('.bt-006');
            document.querySelector('.bt-007').onclick = () => digito('.bt-007');
            document.querySelector('.bt-008').onclick = () => digito('.bt-008');
            document.querySelector('.bt-009').onclick = () => digito('.bt-009');
            document.querySelector('.bt-010').onclick = () => digito('.bt-010');
            document.querySelector('.bt-011').onclick = () => digito('.bt-011');
            document.querySelector('.bt-012').onclick = () => digito('.bt-012');
            document.querySelector('.bt-013').onclick = () => digito('.bt-013');
            document.querySelector('.bt-017').onclick = () => digito('.bt-017');
            document.querySelector('.bt-018').onclick = () => digito('.bt-018');
            document.querySelector('.bt-019').onclick = () => digito('.bt-019');
            document.querySelector('.bt-020').onclick = () => digito('.bt-020');
            document.querySelector('.bt-100').onclick = () => digito('.bt-100');
            document.querySelector('.bt-101').onclick = () => digito('.bt-101');
            document.querySelector('.bt-102').onclick = () => digito('.bt-102');
            document.querySelector('.bt-103').onclick = () => digito('.bt-103');
            document.querySelector('.bt-104').onclick = () => digito('.bt-104');
            document.querySelector('.bt-105').onclick = () => digito('.bt-105');
            document.querySelector('.bt-106').onclick = () => digito('.bt-106');
            document.querySelector('.bt-107').onclick = () => digito('.bt-107');
            document.querySelector('.bt-108').onclick = () => digito('.bt-108');
            document.querySelector('.bt-109').onclick = () => digito('.bt-109');
            document.querySelector('.bt-110').onclick = () => digito('.bt-110');
            document.querySelector('.bt-111').onclick = () => digito('.bt-111');
            document.querySelector('.bt-112').onclick = () => digito('.bt-112');
            document.querySelector('.bt-113').onclick = () => digito('.bt-113');
            document.querySelector('.bt-117').onclick = () => digito('.bt-117');
            document.querySelector('.bt-118').onclick = () => digito('.bt-118');
            document.querySelector('.bt-119').onclick = () => digito('.bt-119');
            document.querySelector('.bt-120').onclick = () => digito('.bt-120');
            document.querySelector('.bt-200').onclick = () => digito('.bt-200');
            document.querySelector('.bt-201').onclick = () => digito('.bt-201');
            document.querySelector('.bt-202').onclick = () => digito('.bt-202');
            document.querySelector('.bt-203').onclick = () => digito('.bt-203');
            document.querySelector('.bt-204').onclick = () => digito('.bt-204');
            document.querySelector('.bt-205').onclick = () => digito('.bt-205');
            document.querySelector('.bt-206').onclick = () => digito('.bt-206');
            document.querySelector('.bt-207').onclick = () => digito('.bt-207');
            document.querySelector('.bt-208').onclick = () => digito('.bt-208');
            document.querySelector('.bt-209').onclick = () => digito('.bt-209');
            document.querySelector('.bt-210').onclick = () => digito('.bt-210');
            document.querySelector('.bt-211').onclick = () => digito('.bt-211');
            document.querySelector('.bt-212').onclick = () => digito('.bt-212');
            document.querySelector('.bt-213').onclick = () => digito('.bt-213');
            document.querySelector('.bt-217').onclick = () => digito('.bt-217');
            document.querySelector('.bt-218').onclick = () => digito('.bt-218');
            document.querySelector('.bt-219').onclick = () => digito('.bt-219');
            document.querySelector('.bt-220').onclick = () => digito('.bt-220');
            document.querySelector('.bt-300').onclick = () => digito('.bt-300');
            document.querySelector('.bt-301').onclick = () => digito('.bt-301');
            document.querySelector('.bt-302').onclick = () => digito('.bt-302');
            document.querySelector('.bt-303').onclick = () => digito('.bt-303');
            document.querySelector('.bt-304').onclick = () => digito('.bt-304');
            document.querySelector('.bt-305').onclick = () => digito('.bt-305');
            document.querySelector('.bt-306').onclick = () => digito('.bt-306');
            document.querySelector('.bt-307').onclick = () => digito('.bt-307');
            document.querySelector('.bt-308').onclick = () => digito('.bt-308');
            document.querySelector('.bt-309').onclick = () => digito('.bt-309');
            document.querySelector('.bt-310').onclick = () => digito('.bt-310');
            document.querySelector('.bt-311').onclick = () => digito('.bt-311');
            document.querySelector('.bt-312').onclick = () => digito('.bt-312');
            document.querySelector('.bt-313').onclick = () => digito('.bt-313');
            document.querySelector('.bt-317').onclick = () => digito('.bt-317');
            document.querySelector('.bt-318').onclick = () => digito('.bt-318');
            document.querySelector('.bt-319').onclick = () => digito('.bt-319');
            document.querySelector('.bt-320').onclick = () => digito('.bt-320');
            document.querySelector('.bt-400').onclick = () => digito('.bt-400');
            document.querySelector('.bt-401').onclick = () => digito('.bt-401');
            document.querySelector('.bt-402').onclick = () => digito('.bt-402');
            document.querySelector('.bt-403').onclick = () => digito('.bt-403');
            document.querySelector('.bt-404').onclick = () => digito('.bt-404');
            document.querySelector('.bt-405').onclick = () => digito('.bt-405');
            document.querySelector('.bt-406').onclick = () => digito('.bt-406');
            document.querySelector('.bt-407').onclick = () => digito('.bt-407');
            document.querySelector('.bt-408').onclick = () => digito('.bt-408');
            document.querySelector('.bt-409').onclick = () => digito('.bt-409');
            document.querySelector('.bt-410').onclick = () => digito('.bt-410');
            document.querySelector('.bt-411').onclick = () => digito('.bt-411');
            document.querySelector('.bt-412').onclick = () => digito('.bt-412');
            document.querySelector('.bt-413').onclick = () => digito('.bt-413');
            document.querySelector('.bt-417').onclick = () => digito('.bt-417');
            document.querySelector('.bt-418').onclick = () => digito('.bt-418');
            document.querySelector('.bt-419').onclick = () => digito('.bt-419');
            document.querySelector('.bt-420').onclick = () => digito('.bt-420');
            document.querySelector('.bt-500').onclick = () => digito('.bt-500');
            document.querySelector('.bt-501').onclick = () => digito('.bt-501');
            document.querySelector('.bt-502').onclick = () => digito('.bt-502');
            document.querySelector('.bt-503').onclick = () => digito('.bt-503');
            document.querySelector('.bt-504').onclick = () => digito('.bt-504');
            document.querySelector('.bt-505').onclick = () => digito('.bt-505');
            document.querySelector('.bt-506').onclick = () => digito('.bt-506');
            document.querySelector('.bt-507').onclick = () => digito('.bt-507');
            document.querySelector('.bt-508').onclick = () => digito('.bt-508');
            document.querySelector('.bt-509').onclick = () => digito('.bt-509');
            document.querySelector('.bt-510').onclick = () => digito('.bt-510');
            document.querySelector('.bt-511').onclick = () => digito('.bt-511');
            document.querySelector('.bt-512').onclick = () => digito('.bt-512');
            document.querySelector('.bt-513').onclick = () => digito('.bt-513');
            document.querySelector('.bt-517').onclick = () => digito('.bt-517');
            document.querySelector('.bt-518').onclick = () => digito('.bt-518');
            document.querySelector('.bt-519').onclick = () => digito('.bt-519');
            document.querySelector('.bt-520').onclick = () => digito('.bt-520');
            document.querySelector('.bt-600').onclick = () => digito('.bt-600');
            document.querySelector('.bt-601').onclick = () => digito('.bt-601');
            document.querySelector('.bt-602').onclick = () => digito('.bt-602');
            document.querySelector('.bt-603').onclick = () => digito('.bt-603');
            document.querySelector('.bt-604').onclick = () => digito('.bt-604');
            document.querySelector('.bt-605').onclick = () => digito('.bt-605');
            document.querySelector('.bt-606').onclick = () => digito('.bt-606');
            document.querySelector('.bt-607').onclick = () => digito('.bt-607');
            document.querySelector('.bt-608').onclick = () => digito('.bt-608');
            document.querySelector('.bt-609').onclick = () => digito('.bt-609');
            document.querySelector('.bt-610').onclick = () => digito('.bt-610');
            document.querySelector('.bt-611').onclick = () => digito('.bt-611');
            document.querySelector('.bt-612').onclick = () => digito('.bt-612');
            document.querySelector('.bt-613').onclick = () => digito('.bt-613');
            document.querySelector('.bt-617').onclick = () => digito('.bt-617');
            document.querySelector('.bt-618').onclick = () => digito('.bt-618');
            document.querySelector('.bt-619').onclick = () => digito('.bt-619');
            document.querySelector('.bt-620').onclick = () => digito('.bt-620');
            document.querySelector('.bt-700').onclick = () => digito('.bt-700');
            document.querySelector('.bt-701').onclick = () => digito('.bt-701');
            document.querySelector('.bt-702').onclick = () => digito('.bt-702');
            document.querySelector('.bt-703').onclick = () => digito('.bt-703');
            document.querySelector('.bt-704').onclick = () => digito('.bt-704');
            document.querySelector('.bt-705').onclick = () => digito('.bt-705');
            document.querySelector('.bt-706').onclick = () => digito('.bt-706');
            document.querySelector('.bt-707').onclick = () => digito('.bt-707');
            document.querySelector('.bt-708').onclick = () => digito('.bt-708');
            document.querySelector('.bt-709').onclick = () => digito('.bt-709');
            document.querySelector('.bt-710').onclick = () => digito('.bt-710');
            document.querySelector('.bt-711').onclick = () => digito('.bt-711');
            document.querySelector('.bt-712').onclick = () => digito('.bt-712');
            document.querySelector('.bt-713').onclick = () => digito('.bt-713');
            document.querySelector('.bt-717').onclick = () => digito('.bt-717');
            document.querySelector('.bt-718').onclick = () => digito('.bt-718');
            document.querySelector('.bt-719').onclick = () => digito('.bt-719');
            document.querySelector('.bt-720').onclick = () => digito('.bt-720');
            document.querySelector('.bt-800').onclick = () => digito('.bt-800');
            document.querySelector('.bt-801').onclick = () => digito('.bt-801');
            document.querySelector('.bt-802').onclick = () => digito('.bt-802');
            document.querySelector('.bt-803').onclick = () => digito('.bt-803');
            document.querySelector('.bt-804').onclick = () => digito('.bt-804');
            document.querySelector('.bt-805').onclick = () => digito('.bt-805');
            document.querySelector('.bt-806').onclick = () => digito('.bt-806');
            document.querySelector('.bt-807').onclick = () => digito('.bt-807');
            document.querySelector('.bt-808').onclick = () => digito('.bt-808');
            document.querySelector('.bt-809').onclick = () => digito('.bt-809');
            document.querySelector('.bt-810').onclick = () => digito('.bt-810');
            document.querySelector('.bt-811').onclick = () => digito('.bt-811');
            document.querySelector('.bt-812').onclick = () => digito('.bt-812');
            document.querySelector('.bt-813').onclick = () => digito('.bt-813');
            document.querySelector('.bt-817').onclick = () => digito('.bt-817');
            document.querySelector('.bt-818').onclick = () => digito('.bt-818');
            document.querySelector('.bt-819').onclick = () => digito('.bt-819');
            document.querySelector('.bt-820').onclick = () => digito('.bt-820');
          
        
            let buttons = document.querySelectorAll("#buttons");
            console.log(buttons);
        
        };

        const digito = (n) => {


            if(n != bt ){
                document.querySelector(n).style.backgroundColor = 'blue';
                bt = n;

            }else if (n == bt){
                document.querySelector(n).style.backgroundColor = '#0b9b9b';
                document.querySelector(n).style.color = 'white';
                bt = "1";
                
                
            }
        };
    }
}
